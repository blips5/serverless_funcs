import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { UserBasic } from '@functions/users/classes/user';


/**
 * Gets a user.
 * @param { ValidatedAPIGatewayProxyEvent} event The event to be processed.
 * @returns [{Response}] a formatted response of success / failure.
 */
const getUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const userId: string = event.pathParameters.id;
  try {
    const user = await UserBasic.Get(userId);

    if (user) {
      return formatResponse({
        status: 200,
        message: user,
        event,
      });
    } else {
      return formatResponse({
        status: 404,
        message: {User: userId, Error: 'not found!'},
        event,
      });
    }
  }
  catch (e) {
    console.log(e)
    return formatResponse({
      status: 404,
      message: {User: userId, Error: 'not found!'},
      event,
    });
  }
}

export const GetUser = middyfy(getUser);
