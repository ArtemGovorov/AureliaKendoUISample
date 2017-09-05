import { inject, LogManager } from "aurelia-framework";
import { I18N } from "aurelia-i18n";
import { Router } from "aurelia-router";
import "kendo-ui/js/kendo.notification";
import "kendo-ui/js/kendo.tabstrip";
import { ControlType } from "../../models/control-type";
import { ConfiguratorService } from "../../services/configurator-service";
import { DataService } from "../../services/data-service";
import { GeniusCookieService } from "../../services/genius-cookie-service";
import { ComponentBase } from "../component-base";

let logger = LogManager.getLogger("Configurator");

/**
 * Represents the configurator component.
 */
@inject(I18N, Router, GeniusCookieService, DataService, ConfiguratorService)
export class Configurator extends ComponentBase {

    private configuredProductId: number;
    public configurationSession;
    public parameterList = {};
    public controlTypeEntity: ControlType;
    public isCallingRest = 0;
    public error = null;

    constructor(i18n: I18N, router: Router, geniusCookieService: GeniusCookieService, dataService: DataService, configuratorService: ConfiguratorService) {
        super(i18n, router, geniusCookieService, dataService, configuratorService);
    }

    public activate(params) {
        //
    }
    public created() {
        //
    }

    public calculateTotalPrice(options) {
        return null;
    }
    public getValueField(parameter) {
        return null;
    }

    public isLargeWindowSize() {
        return null;
    }

    private saveAll() {
        //
    }

    private setCurrentDisplayAndValue(parameter) {
       //
    }

    private setMissingColumnAndDisplayNames(parameter) {
        //
    }

    private setParameterList() {
       //
    }

    private sortConfigurationProfile() {
        //
    }
}