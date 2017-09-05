import { AureliaCookie } from "aurelia-cookie";
import { GeniusCookie } from "../models/genius-cookie";

/**
 * Service class to manage cookies.
 */
export class GeniusCookieService {

// #region Members

    private geniusCookie: GeniusCookie;

// #endregion

// #region Public Methods

    /**
     * Gets all the GeniusCookies.
     */
    public getCookie() {
        if (!this.geniusCookie) {
            this.geniusCookie = this.readCookie();
        }
        return this.geniusCookie;
    }

// #endregion

// #region Private Methods

    private readCookie() {
        let c = new GeniusCookie();
        c.geniusCustomerId = AureliaCookie.get("GeniusCustomerId");
        c.geniusUsername = AureliaCookie.get("GeniusUsername");
        c.geniusRestApiKey = AureliaCookie.get("GeniusRestApiKey");
        c.geniusCompanyCode = AureliaCookie.get("GeniusCompanyCode");
        c.geniusRestApiServer = AureliaCookie.get("GeniusRestApiServer");
        c.geniusUICulture = AureliaCookie.get("GeniusUICulture");
        return c;
    }

// #endregion
}
