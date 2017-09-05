import { UserModel } from "./user-model";

/**
 * Model used as a template to send the data of users to be invited.
 */
export class UserInviteModel {

// #region CTOR

    /**
     * @param  {string} adminEmail The email of administrator
     * @param  {Array<UserModel>} users The list of users to be invited
     * @param  {boolean=false} existingContactsFromApp Should be true if the list is sent from Genius.
     */
    constructor(public adminEmail: string, public users: Array<UserModel>, public existingContactsFromApp: boolean = false) { }

// #endregion
}