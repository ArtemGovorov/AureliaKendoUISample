import { Container } from "aurelia-dependency-injection";
import { GeniusCookieService } from "../../../src/services/genius-cookie-service";
import { Configurator } from "../../../src/views/configurator/configurator";

describe("the Configurator", () => {
    let sut: Configurator;
    beforeEach(() => {
        let container: Container = new Container();
        let cookieService: GeniusCookieService = container.get(GeniusCookieService);
        cookieService.getCookie().geniusRestApiServer = "";
        sut = container.get(Configurator);
    });
    it("calculates total price", () => {
        let options = [{
            totalPrice: 42,
        },
        {
            totalPrice: 24,
        }];
        let returnedTotalPrice = sut.calculateTotalPrice(options);
        expect(returnedTotalPrice).toBe("$66.00");
    });
    it("gets the value field", () => {
        sut.parameterList[42] = {
            configuratorParameterDataSource: [{
                dataSource: {
                    valueColumnName: "value",
                },
            }],
        };
        let parameter = {
            id: 42,
        };
        expect(sut.getValueField(parameter)).toEqual("value");
    });
});