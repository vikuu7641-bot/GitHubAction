import type { Locator, Page } from "playwright";
import { genericMethod } from "../BasePage/BasePage.js";
import { TIMEOUT } from "node:dns";

export class checkoutPage extends genericMethod {

    addNewDelivery: Locator;
    country: Locator;
    Name: Locator;
    phoneNumber: Locator;
    streetAddress: Locator;
    city: Locator;
    state: Locator;
    ZIPCode: Locator;


    constructor(page: Page) {
        super(page);

        this.addNewDelivery = page.locator("//a[contains(text(),'Add a new delivery address')]");
        this.country = page.locator("//select[@name='address-ui-widgets-countryCode']");
        this.Name = page.locator("//input[@id='address-ui-widgets-enterAddressFullName']");
        this.phoneNumber = page.locator("//input[@id='address-ui-widgets-enterAddressPhoneNumber']");
        this.streetAddress = page.locator("//input[@id='address-ui-widgets-enterAddressLine1']");
        this.city = page.locator("//input[@id='address-ui-widgets-enterAddressCity']");
        this.state = page.locator("//input[@id='address-ui-widgets-enterAddressStateOrRegion']");
        this.ZIPCode = page.locator("//input[@id='address-ui-widgets-enterAddressPostalCode']");
    }



    async clickOnNewDelivery() {
        await this.Click(this.addNewDelivery);
    }

    async selectCountry(country: string) {
        await this.dropdownSelectByValue(this.country, country)
    }

    async enterName(name: string) {
        await this.Fill(this.Name, name)
    }

    async enterPhoneNumber(PhoneNumber: string) {
        await this.Fill(this.phoneNumber, PhoneNumber)
    }

    async enterStreetAddress(StreetAddress: string) {
        await this.Fill(this.streetAddress, StreetAddress)
    }

    async enterCity(City: string) {
        await this.Fill(this.city, City)
    }

    async enterState(State: string) {
        await this.Fill(this.state, State)
    }

    async enterZIPCode(ZIP_Code: string) {
        await this.Fill(this.ZIPCode, ZIP_Code)
    }



}