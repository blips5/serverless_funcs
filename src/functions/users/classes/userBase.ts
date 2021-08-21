import { IUser } from '@functions/users/interfaces';
import { RoleType } from '@functions/users/enums';
import { AWSError } from 'aws-sdk';
import { UsersBasic } from '@libs/mainDynamoDbHelpers/usersBasic';

export abstract class UserBase implements IUser {

    id: string;
    username: string;
    password: string;
    email: string;
    roles: RoleType[];
    lastActive: number;
    createdAt: number;

    protected constructor(username:string, password:string, email:string, createdAt: number,
                          id?:string, roles?: RoleType[], lastActive?: number) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.roles = roles;
        this.lastActive = lastActive;
        this.createdAt = createdAt;

    }

    static async Create(user: IUser): Promise<string> {
        try {
            return await UsersBasic.Create(user);
        }
        catch (e) {
            console.log((e as AWSError).message)
            return (e as AWSError).message;
        }
    }

    static async Get(id: string): Promise<Promise<IUser>> {
        try{
            return await UsersBasic.Get(id);
        }
        catch (e) {
            console.log((e as AWSError).message)
        }
    }
}
