import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${console.log(__dirname),handlerPath(__dirname)}/handler.AddUser`,
  events: [
    {
      http: {
        method: 'put',
        path: 'user/{id}',
        request: {
          schema: {
            'application/json': schema
          }
        },
        response: {
          statusCodes: {
            400: {
              pattern: '.*"statusCode":400,.*',
              template:{
                'application/json':   '{"statusCode": 200}'
              },

            }
          }
        }
      }
    }
  ]
}
