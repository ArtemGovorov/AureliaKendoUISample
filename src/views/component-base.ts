import { I18N } from "aurelia-i18n";
import { Router } from "aurelia-router";
import { GeniusCookie } from "../models/genius-cookie";
import { LanguageToggle } from "../models/language-toggle";
import { ConfiguratorService } from "../services/configurator-service";
import { DataService } from "../services/data-service";
import { GeniusCookieService } from "../services/genius-cookie-service";
import { MvcService } from "../services/mvc-service";

/**
 * Represents the base component.
 */
export class ComponentBase {

// #region Members

    /**
     * Aurelia router service.
     */
    public router: Router;
    /**
     *  Model to represent the cookies used in the application.
     */
    public geniusCookie: GeniusCookie;
    /**
     * Retrieves the cookies from the MVC.
     */
    public geniusCookieService: GeniusCookieService;
    /**
     * Manage the language of the page.
     */
    public languageToggle: LanguageToggle;
    /**
     * Service to communicate with the REST API.
     */
    public dataService: DataService;
    /**
    * Shows the loading spinner or not.
    */
    public showSpinner: boolean;
    /**
     * Service to communicate with the REST API.
     */
    public configuratorService: ConfiguratorService;
    /**
     * Link between MVC and Aurelia
     */
    public mvcService: MvcService;

// #endregion

// #region CTOR

    constructor(public i18n: I18N, router?: Router, geniusCookieService?: GeniusCookieService, dataService?: DataService, configuratorService?: ConfiguratorService, mvcService?: MvcService){
        if (router !== undefined){
            this.router = router;
         }
         this.languageToggle = new LanguageToggle(this.i18n);
         if (geniusCookieService !== undefined) {
             this.geniusCookieService = geniusCookieService;
             this.geniusCookie = geniusCookieService.getCookie();
         }
         if (dataService !== undefined) {
             this.dataService = dataService;
             this.dataService.setToken(this.geniusCookie.geniusRestApiKey);
         }
         if (configuratorService !== undefined) {
             this.configuratorService = configuratorService;
             this.configuratorService.setToken(this.geniusCookie.geniusRestApiKey);
         }
         if (mvcService !== undefined) {
             this.mvcService = mvcService;
         }
    }

// #endregion
}