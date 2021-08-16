import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { User } from '@functions/interfaces';
import { UserDynamodb } from '@libs/mainDynamodb';
import { Crypto } from '@functions/helpers/crypto';

/**
 * Adds a new User.
 * @param { ValidatedAPIGatewayProxyEvent} event The event to be processed.
 * @returns [{Response}] a formatted response of success / failure.
 */
const addUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { id } = event.pathParameters;
  const user: User = {
    id: id,
    username: event.body.username,
    password: event.body.password
  }

  if (Crypto.checkRequirements(user.password)) {
    try {
      user.password = await Crypto.encryptPassword(user.password)
      console.log('Adding user');
      const res = await UserDynamodb.AddUser(user)
      if (res) {
        return formatResponse({
          status: 200,
          message: `success`,
          event
        });
      }
    }
    catch (err) {
      console.log(err)
      return formatResponse({
        status: 422,
        message: `Unprocessable Entity ??`,
        event
      });
    }
  } return formatResponse({
    status: 422,
    message: `Unprocessable Entity password does not meet the requirements!`,
    event
  });
}

export const main = middyfy(addUser);
