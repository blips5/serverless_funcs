import {  DynamoDB } from 'aws-sdk';
import { AttributeMap, PutItemInput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import GetItemInput = DocumentClient.GetItemInput;

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
export interface ITableParams extends GetItemInput, PutItemInput {


}

export class MainDynamodb {

    static Add = (tableParams:PutItemInput):Promise<string> =>
        new Promise((resolve, reject) => {
        DbClient.put(tableParams, (err, res) => {
            if (err) {
                console.log(err);
                reject(`Failed to add to ${tableParams.TableName} \n ${err.message}`);
            }
            console.log(res);
            resolve('success');
        });
    });


    static Get = (tableParams:GetItemInput): Promise<AttributeMap> =>
        new Promise((resolve, reject) => {
        DbClient.get(tableParams, (err, res) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log("res1")
            console.log(res)
            resolve(res.Item)

        });
    })
}
