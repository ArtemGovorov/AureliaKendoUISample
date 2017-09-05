/** Class User */
export class UserModel {

// #region Constructor

    /**
     * Constructor with parameters to instanciate a User.
     * @param  {string} firstName
     * @param  {string} lastName
     * @param  {Array<string>} emails
     * @param  {boolean=false} exist True if the user exist in Genius.
     */
    constructor(public firstName: string, public lastName: string, public emails: Array<string>, public exist: boolean = false){}
// #endregion
}