
import { HttpClient } from "aurelia-fetch-client";
import { inject, LogManager } from "aurelia-framework";
import { RestApiResult } from "../models/rest-api-result";
import { GeniusCookieService } from "./genius-cookie-service";

let logger = LogManager.getLogger("RestServiceBase");
/**
 * Base class to handle the low level logic.
 */
@inject(GeniusCookieService)
export class RestServiceBase {

    public token: string;
    public server: string;
    public httpClient: HttpClient;

    constructor(geniusCookieService: GeniusCookieService) {
}

    public jsonToCamelOrToPascal(data, toUpper?: boolean) {
        return null;
    }
    public setToken(loginToken: string) {
        // Some code
    }
    public setUrlWithArgs(url: string, filter?: string, sort?: string, loadRelated?: boolean, limit?: number, pageNumber?: number, pageSize?: number): string {
        return null;
    }
    public setHttpFetchQuery<T>(uri: string, errorMessage: string, httpMethod?: string, body?, useStandardConfig?: boolean){
        return null;
    }
}

export interface ISearchModel{
	Filter?: string;
	Sort?: string;
	Related?: boolean;
	Limit?: number;
	PageNumber?: number;
	PageSize?: number;
}

export enum Permission {
    CanView = "canView",
    CanEdit = "canEdit",
    CanAdd = "canAdd",
    CanDelete = "canDelete",
}

export enum HttpMethod {
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
}

export enum Culture {
    French = "french",
    English = "english",
}