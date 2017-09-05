import { inject, LogManager } from "aurelia-framework";
import { I18N } from "aurelia-i18n";
import { DataService } from "../services/data-service";
import { GenericMasterFiles, GenericMasterFilesValue } from "./dal";

let logger = LogManager.getLogger("Configurator");

@inject(I18N, DataService)
/**
 * Model used to represent the controls defined in the application.
 */
export class ControlType {

// #region Members

    private static instance: ControlType;
    public controlTypeList = [];

// #endregion

// #region CTOR

    private constructor(private i18n: I18N, private dataServices: DataService) {
        let searchModel = { Filter: "Code=CONTROLTYPE" };
        this.dataServices.fetchEntities<Array<GenericMasterFiles>>(GenericMasterFiles.name, searchModel)
            .then(response => {
                let searchModel = { Filter: `GenericMasterFilesLink=${response.Result[0].link}` };
                this.dataServices.fetchEntities<Array<GenericMasterFilesValue>>(GenericMasterFilesValue.name, searchModel)
                    .then(response => {
                        for (let control of response.Result) {
                            this.controlTypeList[control.code] = control.id;
                        }
                    })
                    .catch(function (e) {
                        logger.error(`Loading failed with ${e.name}: ${e.message}.`);
                        this.error = new Array();
                        if (e.name === "TypeError") {
                            $("#staticNotification").data("kendoNotification").show(this.i18n.tr("error.restApi"), "error");
                        }
                        else {
                            $("#staticNotification").data("kendoNotification").show(this.i18n.tr("error.default"), "error");
                        }
                    }.bind(this));
            })
            .catch(function (e) {
                logger.error(`Loading failed with ${e.name}: ${e.message}.`);
                this.error = new Array();
                if (e.name === "TypeError") {
                    $("#staticNotification").data("kendoNotification").show(this.i18n.tr("error.restApi"), "error");
                }
                else {
                    $("#staticNotification").data("kendoNotification").show(this.i18n.tr("error.default"), "error");
                }
            }.bind(this));
    }

// #endregion

// #region Public Methods

    /**
     * Return an instance of ControlType model.
     * @param  {ConfiguratorService} restServices
     * @param  {I18N} i18n
     */
    public static getInstance(i18n: I18N, dataService: DataService){
        return this.instance || (this.instance = new this(i18n, dataService));
    }

    /**
     * returns true if the control is a boolean.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isBool(controlTypeId: number): boolean {
        return controlTypeId === this.controlTypeList["BOOLEAN"];
    }

    /**
     * returns true if the control is an integer.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isInteger(controlTypeId: number): boolean {
        return controlTypeId === this.controlTypeList["INTEGER"];
    }

    /**
     * returns true if the control is a decimal.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isDecimal(controlTypeId: number): boolean {
        return controlTypeId === this.controlTypeList["DECIMAL"];
    }

    /**
     * Returns returns true if the control is a boolean.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isDate(controlTypeId: number): boolean {
        return controlTypeId === this.controlTypeList["DATE"];
    }

    /**
     * Returns returns true if the control is a boolean.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isDateTime(controlTypeId: number): boolean {
        return controlTypeId === this.controlTypeList["DATETIME"];
    }

    /**
     * Returns returns true if the control is a string.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isString(controlTypeId: number): boolean {
        return controlTypeId === this.controlTypeList["STRING"];
    }

    /**
     * returns true if the control is a radioList.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isRadioList(controlTypeId: number): boolean {
        return controlTypeId === this.controlTypeList["RADIOLIST"];
    }

    /**
     * Returns returns true if the control is a dropDownList.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isDropDownList(controlTypeId: number) {
        return controlTypeId === this.controlTypeList["DROPDOWNLIST"];
    }

    /**
     * Returns returns true if the control is a multiselect.
     * @param {number} controlTypeId Control type id.
     * @returns {boolean}
     */
    public isMultiSelect(controlTypeId: number) {
        return controlTypeId === this.controlTypeList["MULTISELECT"];
    }

// #endregion
}