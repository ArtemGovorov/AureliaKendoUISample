/**
 * This model is used to send batch transaction to the restApi
 */
export class BatchTransaction {

    /** List of objects to create (Id should be null) */
    // tslint:disable-next-line:naming-convention
    public Create: Array<{}>;

    /** List of primary keys to delete (Ids should be strings) */
    // tslint:disable-next-line:naming-convention
    public Delete: Array<string>;

    /** List of objects to update (All objects alredy existing in the database) */
    // tslint:disable-next-line:naming-convention
    public Update: Array<{}>;

	constructor() {
        this.Create = new Array();
        this.Delete = new Array();
        this.Update = new Array();
	}
}