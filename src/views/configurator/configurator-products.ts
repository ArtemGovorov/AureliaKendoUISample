import { inject, LogManager } from "aurelia-framework";
import { I18N } from "aurelia-i18n";
import { Router } from "aurelia-router";
import "kendo-ui/js/kendo.notification";
import { ConfiguratorService } from "../../services/configurator-service";
import { GeniusCookieService } from "../../services/genius-cookie-service";
import { ComponentBase } from "../component-base";

let logger = LogManager.getLogger("ConfiguratorProducts");

/**
 * Represents the ConfiguratorProducts component.
 */
@inject(I18N, Router, GeniusCookieService, ConfiguratorService)
export class ConfiguratorProducts extends ComponentBase {

    public products: Array<Object>;
    public error = null;

    constructor(i18n: I18N, router: Router, geniusCookieService: GeniusCookieService, configuratorService: ConfiguratorService) {
        super(i18n, router, geniusCookieService, undefined, configuratorService, undefined);
    }

    public created() {
       //
    }
    public goToProduct(id: string) {
       //
    }
}