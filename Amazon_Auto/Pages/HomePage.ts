import type { Locator, Page } from "playwright";
import { genericMethod } from "../BasePage/BasePage.js";

export class homePage extends genericMethod {

    searchField: Locator;
    searchButton: Locator;
    

    constructor(page: Page) {
        super(page);
        this.searchField = page.locator("//input[@id='twotabsearchtextbox']");
        this.searchButton = page.locator("//div[@aria-label='boat speakers waterproof']");
    }

   

    async enterProductName(productName: string) {
        await this.Fill(this.searchField, productName);
    }

    async clickOnSearchedProduct() {
        await this.Click(this.searchButton);
    }

}