import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { Crypto } from '@functions/helpers/crypto';
import { IUser } from '@functions/users/interfaces';
import { UserBasic } from '@functions/users/classes/user';
import { RoleType } from '@functions/users/enums';

/**
 * Adds a new User.
 * @param { ValidatedAPIGatewayProxyEvent} event The event to be processed.
 * @returns [{Response}] a formatted response of success / failure.
 */
const addUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { body, pathParameters } = event;
  const user: IUser = new UserBasic(
      body.username, body.password, body.email,
      body.createdAt, pathParameters.id,
      body.roles as RoleType[]
  )

  if (Crypto.checkRequirements(user.password)) {
    try {
      user.password = await Crypto.encryptPassword(user.password)
      const res = await UserBasic.Create(user)
      if (res) {
        return formatResponse({
          status: 201,
          message: {message:res},
          event
        });
      }
    }
    catch (err) {
      console.log(err)
      return formatResponse({
        status: 422,
        message: {error: `Unprocessable Entity ??`},
        event
      });
    }
  } return formatResponse({
    status: 422,
    message: {error: `Unprocessable Entity password does not meet the requirements!`},
    event
  });
}

export const AddUser = middyfy(addUser);
