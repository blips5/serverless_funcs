import { UsersBase } from '@libs/mainDynamoDbHelpers/users';
import { MainDynamodb } from '@libs/mainDynamodb';
import { IUser } from '@functions/users/interfaces';
import { AWSError } from 'aws-sdk';
import { PutItemInputAttributeMap } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import GetItemInput = DocumentClient.GetItemInput;
import PutItemInput = DocumentClient.PutItemInput;


export class UsersBasic extends UsersBase{

    static async Create(user: IUser, tableName= this.tableName): Promise<string> {
        const params: PutItemInput = {
            TableName: tableName,
            Item: user as unknown as PutItemInputAttributeMap
        }
        try {
            return await MainDynamodb.Add(params);
        }
        catch (e) {
            console.log((e as AWSError).message)
            return (e as AWSError).message;
        }
    }

    static async Get(id: string): Promise<IUser> {
        const params: GetItemInput = {
            TableName: 'users',
            Key: {id:  id }
        }
        try{
            return await MainDynamodb.Get(params) as unknown as IUser;
        }
        catch (e) {
            console.log(e);
        }
    }
}
