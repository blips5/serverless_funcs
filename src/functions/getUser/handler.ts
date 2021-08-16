import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { User } from '@functions/interfaces';
import { UserDynamodb } from '@libs/mainDynamodb';

/**
 * Gets a user.
 * @param { ValidatedAPIGatewayProxyEvent} event The event to be processed.
 * @returns [{Response}] a formatted response of success / failure.
 */
const getUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const userId: string = event.pathParameters.id;
  const user:User = await UserDynamodb.GetUser(userId);

  if (user) {
    console.log(user)
    return formatResponse({
      status: 200,
      message: `Hello ${user.username}, welcome to the exciting Serverless world!`,
      event,
    });
  }
  else {
    return formatResponse({
      status: 404,
      message: `User: ${userId}, not found!`,
      event,
    });
  }
}

export const main = middyfy(getUser);
