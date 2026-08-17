import type { Locator, Page } from "playwright";
import { genericMethod } from "../BasePage/BasePage.js";

export class CartPage extends genericMethod {

   proceedToCheckout: Locator;
   productName: Locator;
   productQuantity: Locator;
   productPrice: Locator;
   clickOnIncrementProduct: Locator;
   clickOnDecrementProduct: Locator;
   clickOnTrashProduct: Locator;



   constructor(page: Page) {
      super(page);
      this.proceedToCheckout = page.locator("//input[@name='proceedToRetailCheckout']");
      this.productName = page.locator("//a[@data-csa-c-content-id='product-title']//span[@class='a-truncate-cut']");
      this.productQuantity = page.locator("//span[@id='sc-subtotal-label-activecart']");
      this.productPrice = page.locator("//span[@id='sc-subtotal-amount-buybox']//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap']");
      this.clickOnIncrementProduct = page.locator("//span[@class='a-icon a-icon-small-add']");
      this.clickOnDecrementProduct = page.locator("//span[@class='a-icon a-icon-small-remove']");
      this.clickOnTrashProduct = page.locator("//span[@class='a-icon a-icon-small-trash']");
   }

   async clickOnProceedButton() {
      await this.Click(this.proceedToCheckout);
   }

   async clickOnIncrementProductButton() {
      await this.Click(this.clickOnIncrementProduct);
   }

   async clickOnDecrementProductButton() {
      await this.Click(this.clickOnDecrementProduct);
   }

   async clickOnTrashProductButton() {
      await this.Click(this.clickOnTrashProduct);
   }

}