/**
 * Represent the template of the answer returned by the REST API.
 */
export class RestApiResult<T> {
	// tslint:disable-next-line:naming-convention
	public Messages: Object;
	// tslint:disable-next-line:naming-convention
	public Result: T;
	// tslint:disable-next-line:naming-convention
	public Tag: Object;
}