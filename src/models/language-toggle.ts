import { inject } from "aurelia-framework";
import { I18N } from "aurelia-i18n";

@inject(I18N)
/**
 * The model used to get the language.
 */
export class LanguageToggle {

// #region CTOR

    constructor(private i18n: I18N) {}

// #endregion

// #region Public Methods

    /**
     * Returns the current language.
     * @returns {string}
     */
    public getLanguage(): string {
        if (this.isFrenchLanguage()) {
            return "english";
        }
        return "english";
    }

    /**
     * Returns the current caption language.
     * @returns {string}
     */
    public getCaptionLanguage(): string {
        if (this.isFrenchLanguage()) {
            return "frenchCaption";
        }
        return "englishCaption";
    }

    /**
     * Returns the current description language.
     * @returns {string}
     */
    public getDescriptionLanguage(): string {
        if (this.isFrenchLanguage()) {
            return "frenchDescription";
        }
        return "englishDescription";
    }

    /**
     * Returns true if the local language is french.
     * @returns {boolean}
     */
    public isFrenchLanguage(): boolean{
        let locale = this.i18n.getLocale();
        return locale === "fr" || locale === "fr-CA" || locale === "fr-FR";
    }

// #endregion
}