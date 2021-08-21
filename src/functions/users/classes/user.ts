import { UserBase } from '@functions/users/classes/userBase';
import { RoleType } from '@functions/users/enums';

export class UserBasic extends UserBase {

    constructor(username:string, password:string, email:string, createdAt: number,
                id?:string, roles?: RoleType[], lastActive?: number) {

        super( username, password, email, createdAt, id, roles, lastActive);
    }
}
