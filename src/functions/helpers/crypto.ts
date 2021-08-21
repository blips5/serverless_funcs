import bcrypt from 'bcrypt';
import { IUser } from '@functions/users/interfaces';


export class Crypto {

    static async encryptPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    static async checkPassword(password:string, user:IUser): Promise<boolean> {
        return await bcrypt.compare(password, user.password);
    }

    /**
     * Checks a raw password string meets the requirements before hashing.
     * @param password
     * @returns boolean
     */
    static checkRequirements(password:string): boolean {
        return /^([a-z0-9]{3,})$/.test(password);
    }
}


