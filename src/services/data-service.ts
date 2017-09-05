import { inject } from "aurelia-framework";
import { BatchTransaction } from "../models/batch-transaction";
import { GeniusCookieService } from "../services/genius-cookie-service";
import { Culture, HttpMethod, ISearchModel, Permission, RestServiceBase } from "./rest-service-base";

/**
 * Service class to communicate with the REST API.
 */
@inject(GeniusCookieService)
export class DataService extends RestServiceBase {

// #region CTOR

	constructor(geniusCookieService: GeniusCookieService) {
		super(geniusCookieService);
	}

// #endregion

// #region Public Methods

	public getPermissions<T>(permission: Permission) {
		return null;
	}
	public postEntities<T>(entityName: string, body: BatchTransaction) {
		return null;
	}
	public postEntityCollection<T>(entityName: string, body: any) {
		return null;
	}
	public putEntityCollection<T>(entityName: string, body: any) {
		return null;
	}

	public getEntityCollectionByPrimaryKeys<T>(entityName: string, primaryKeys: number[], loadRelated?: boolean ) {
		return null;
	}
	public deleteEntityCollectionByPrimaryKeys<T>(entityName: string, primaryKeys: number[]) {
		return null;
	}

	public getEntitiesExist<T>(entityName: string, primaryKeys: number[]) {
		return null;
	}
	public getEntities<T>(entityName: string, fieldName: string, body: any) {
		return null;
	}
	public fetchEntities<T>(entityName: string, searchModel?: ISearchModel) {
		return null;
	}
	public postFetchEntities<T>(entityName: string,  body?: any) {
		return null;
	}
	public getEntityCount<T>(entityName: string) {
		return null;
	}
	public getEntityNewTemplate<T>(entityName: string) {
		return null;
	}
	public getEntityPrimaryKey<T>(entityName: string) {
		return null;
	}
	public getEntitySchema<T>(entityName: string) {
		return null;
	}
	public getEntityPermission<T>(entityName: string, permission: Permission) {
		return null;
	}
	public getEntitySettings<T>(entityName: string, culture: Culture) {
		return null;
	}
	public saveEntity<T>(entityName: string, data: any) {
		return null;
	}
	public saveEntityByPrimaryKey<T>(entityName: string, data: any) {
		return null;
	}
	public getEntityByPrimaryKey<T>(entityName: string, primaryKey: number, loadRelated?: boolean) {
		return null;
	}
	public deleteEntityByPrimaryKey<T>(entityName: string, primaryKey: number) {
		return null;
	}
	public getEntityExist<T>(entityName: string, primaryKey: number) {
		return null;
	}

// #endregion
}
