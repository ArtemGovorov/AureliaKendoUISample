/**
 * The model used to represent a portal user.
 */
export class PortalUserViewModel {
    public id: number;
    public email: string;
    public isConfirmed: boolean;
    public isAdministrator: boolean;
    public contactLockedOut: boolean;
}