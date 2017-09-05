import { UserModel } from "./user-model";

export class UserInviteModel {

    constructor(public adminEmail: string, public users: Array<UserModel>, public existingContactsFromApp: boolean = false) { }
}