import { RoleType } from '@functions/users/enums';

export interface IUser {
    id?:string
    username:string,
    password: string,
    email: string,
    createdAt?: number,
    lastActive?: number,
    roles?: RoleType[]
}

export type Credentials = { id?: string, username: string, password: string}
