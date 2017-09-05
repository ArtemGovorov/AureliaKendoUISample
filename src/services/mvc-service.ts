import { inject, LogManager } from "aurelia-framework";
import { GeniusCookieService } from "./genius-cookie-service";
import { RestServiceBase } from "./rest-service-base";

/**
 * Service class to communicate with the MVC.
 */
@inject(GeniusCookieService)
export class MvcService extends RestServiceBase{
}