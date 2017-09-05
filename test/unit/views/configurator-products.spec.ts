import { Container } from "aurelia-dependency-injection";
import { RestApiResult } from "../../../src/models/rest-api-result";
import { ConfiguratorService} from "../../../src/services/configurator-service";
import { GeniusCookieService } from "../../../src/services/genius-cookie-service";
import { ConfiguratorProducts } from "../../../src/views/configurator/configurator-products";

describe("product configurator async created", () => {
    let sut: ConfiguratorProducts;
    let container: Container;
    beforeEach((done) => {
        container = new Container();
        let cookieService: GeniusCookieService = container.get(GeniusCookieService);
        cookieService.getCookie().geniusRestApiServer = "";
        sut = container.get(ConfiguratorProducts);
        let fakeRestService = container.get(ConfiguratorService);
        let resolvedRestResult: RestApiResult<object> = container.get(RestApiResult);
        resolvedRestResult.Result = {};
        resolvedRestResult.Messages = {};
        spyOn(fakeRestService, "getConfigurableProducts").and.callFake(() => {
            return Promise.resolve(resolvedRestResult);
        });

        sut.created();
        done();
    });
    it("is created with the right values", () => {
        expect(sut.products).toBeUndefined();
    });
});