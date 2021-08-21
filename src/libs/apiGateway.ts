import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";
import { RawResponse, Response } from './interfaces';

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

/**
 * Formats a response to be returned.
 * @param {RawResponse} response The response to be formatted.
 * @returns {Response} A formatted response.
 */
export const formatResponse = (response: RawResponse): Response  => {

  return {
    statusCode: response.status,
    body: JSON.stringify(response.message)
  }
}
