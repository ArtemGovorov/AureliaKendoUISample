import { Container } from "aurelia-dependency-injection";
import { Customer } from "../../../src/views/customer";

describe("the customer starting page", () => {
    it("set the quote number with valid param", () => {
        let params = {
            id: "42",
        };
        let container: Container = new Container();
        let sut: Customer = container.get(Customer);

        sut.activate(params);

        expect(sut.quoteNumber).toBe("42");
    });
    it("does not set quote number with empty param", () => {
        let container: Container = new Container();
        let sut: Customer = container.get(Customer);

        sut.activate(undefined);

        expect(sut.quoteNumber).toBeUndefined();
    });
    it("goes to the configurator", () => {
        let container: Container = new Container();
        let sut: Customer = container.get(Customer);

        spyOn(sut, "goToConfigurator");
        sut.goToConfigurator();

        expect(sut.goToConfigurator).toHaveBeenCalled();
    });
});
