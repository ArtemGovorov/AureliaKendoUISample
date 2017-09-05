import { inject } from "aurelia-framework";
import { GeniusCookieService } from "../services/genius-cookie-service";
import { HttpMethod, RestServiceBase } from "./rest-service-base";

/**
 * Service class to communicate with the REST API.
 */
@inject(GeniusCookieService)
export class ConfiguratorService extends RestServiceBase {

	constructor(geniusCookieService: GeniusCookieService) {
		super(geniusCookieService);
	}

	public getConfigurableProducts<T>(companyName: string) {
		return null;
	}

	public startConfiguration<T>(productId: number, quantity: number, customerId: number) {
		return null;
	}

	public saveConfiguration<T>(configuratorSessionId: string, createQuote: boolean) {
		return null;
	}

	public setAnswerQuantity<T>(configuratorSessionId: string, answerId: number, quantity: number) {
		return null;
	}

	public setParameterValue<T>(configuratorSessionId: string, parameterId: number, value: string) {
		return null;
	}

}

export interface IConfigurationSession {
	Success: boolean;
	QuoteNumber: string;
}

export interface IQuoteHeader {
	Quote: string;
	Item: string;
	ItemState: string;
}
