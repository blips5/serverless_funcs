import bcrypt from 'bcrypt';
import { User } from '@functions/interfaces';

export class Crypto {

    static async encryptPassword(password: string): Promise<string> {

        const newPassword:string = await bcrypt.hash(password, 10)
        return newPassword;
    }

    static async decryptPassword(password:string, user:User): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch) {
            return true;
        }
        return false;
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


