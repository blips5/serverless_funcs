import { DynamoDB } from 'aws-sdk';
const DbClient = new DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    secretAccessKey: 'DEFAULT_SECRET'
});
export class MainDynamodb {
    constructor() {
        this.GetUser = (id) => new Promise((resolve, reject) => {
            const user = {
                username: 'nath',
                password: 'pass'
            };
            const params = {
                TableName: 'users',
                Key: {
                    id: id,
                }
            };
            console.log('ere');
            DbClient.get(params, (err, res) => {
                if (err)
                    console.log(err);
                reject(err);
                console.log(res);
                resolve(user);
            });
        });
    }
}
//# sourceMappingURL=main.dynamodb.js.map