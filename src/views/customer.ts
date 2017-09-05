import { inject } from "aurelia-framework";
import { I18N } from "aurelia-i18n";
import { Router } from "aurelia-router";
import { GeniusCookieService } from "../services/genius-cookie-service";
import { ComponentBase } from "./component-base";

/**
 * Represent the index component.
 */
@inject(I18N, Router, GeniusCookieService)
export class Customer extends ComponentBase {

    public customers = [];
    public quoteNumber: string;

    constructor(i18n: I18N, router: Router, geniusCookieService: GeniusCookieService) {
        super(i18n, router, geniusCookieService);
    }

    public activate(params) {
        //
    }

    public goToConfigurator() {
        //
    }
}