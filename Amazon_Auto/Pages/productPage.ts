import type { Locator, Page } from "playwright";
import { genericMethod } from "../BasePage/BasePage.js";

export class productPage extends genericMethod {

    addToCart: Locator;
    productPrice: Locator;


    constructor(page: Page) {
        super(page);
        this.addToCart = page.locator("//input[@id='add-to-cart-button']");
        this.productPrice = page.locator("//div[@id='corePrice_feature_div']//span[@class='a-offscreen']").first();

    }
    async addProductToTheCart() {
        await this.Click(this.addToCart);
    }

    async getProductPrice(): Promise<string> {
        return await this.InnerText(this.productPrice);
    }
}