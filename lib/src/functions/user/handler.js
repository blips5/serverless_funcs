import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
const getUser = async (event) => {
    console.log(event.pathParameters.param);
    console.log('here');
    console.log('here1');
    return formatJSONResponse({
        message: "Hello ${event.pathParameters.param}, welcome to the exciting Serverless world!",
        event,
    });
};
export const main = middyfy(getUser);
//# sourceMappingURL=handler.js.map