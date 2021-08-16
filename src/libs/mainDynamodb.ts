import { DynamoDB }  from 'aws-sdk';
import { User } from '@functions/interfaces';

console.log(`Env local: ${process.env.IS_LOCAL}`)

const DbClient  = new DynamoDB.DocumentClient({
    region: process.env.IS_LOCAL? 'localhost' : 'eu-west-1',
    endpoint: process.env.IS_LOCAL? 'http://localhost:10000' : '',
    // needed if you don't have aws credentials at all in env
    accessKeyId: process.env.IS_LOCAL? 'DEFAULT_ACCESS_KEY' : '',
    // needed if you don't have aws credentials at all in env
    secretAccessKey: process.env.IS_LOCAL? 'DEFAULT_SECRET' : ''
})

//console.log(DbClient)


export class UserDynamodb {

    static AddUser = (user:User):Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            console.log(user)
            const params = {
                TableName: 'users',
                Item: user
            };

            DbClient.put(params, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(`Failed to add user: ${user.id}`);
                }
                console.log(res);
                resolve('success');
            });
        });
    }

    static GetUser = (id: string): Promise<User> => new Promise<User>((resolve, reject) => {
        const params = {
            TableName: 'users',
            Key: {
                id,
            }
        }
        DbClient.get(params, (err, res) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            //console.log(res);
            const user:User = <User>res.Item;
            resolve(user)
        });
    })
}
