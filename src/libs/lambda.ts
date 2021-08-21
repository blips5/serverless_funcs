import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
import {Context} from "aws-lambda";
import Middy = middy.Middy;
import {ValidatedEventAPIGatewayProxyEvent} from "@libs/apiGateway";
import schema from "@functions/users/getUser/schema";

export const middyfy = (handler:ValidatedEventAPIGatewayProxyEvent<typeof schema>):Middy<unknown, unknown, Context>  => {
  return middy(handler).use(middyJsonBodyParser())
}
