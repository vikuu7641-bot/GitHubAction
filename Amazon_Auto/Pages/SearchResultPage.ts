import type { Locator, Page } from "playwright";
import { genericMethod } from "../BasePage/BasePage.js";

export class searchResultPage extends genericMethod{

   product:Locator;


   constructor(page:Page){
    super(page);

    this.product=page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']//span").first();
   }


   async clickOnProduct(){
    await this.Click(this.product)
   }

}











