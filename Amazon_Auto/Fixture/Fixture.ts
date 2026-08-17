import {test as base} from "playwright/test";
import { genericMethod } from "../BasePage/BasePage.js";
import { searchResultPage } from "../Pages/SearchResultPage.js";
import { homePage } from "../Pages/HomePage.js";
import { CartPage } from "../Pages/cartPage.js";
import { commanPage } from "../Pages/CommanPage.js";
import { productPage } from "../Pages/productPage.js";
import { checkoutPage } from "../Pages/checkoutPage.js";

type myFixture={
genericMethod:genericMethod;
searchResultPageObj:searchResultPage;
homePageObj:homePage;
cartPageObj:CartPage;
commanPageObj:commanPage;
productPageObj:productPage;
checkoutPageObj:checkoutPage;
}

export const test=base.extend<myFixture>({

    genericMethod:async({page},use)=>{
        let gm:genericMethod=new genericMethod(page);
        await use(gm);
    },

    searchResultPageObj:async({page},use)=>{
        let SRP:searchResultPage=new searchResultPage(page);
        await use(SRP);
    },

    homePageObj:async({page},use)=>{
        let hp:homePage=new homePage(page);
        await use(hp);
    },

    cartPageObj:async({page},use)=>{
        let cartpage:CartPage=new CartPage(page);
        await use(cartpage);
    },
    commanPageObj:async({page},use)=>{
        let cp:commanPage=new commanPage(page);
        await use(cp);
    },
    productPageObj:async({page},use)=>{
        let pp:productPage=new productPage(page);
        await use(pp);
    },
    checkoutPageObj:async({page},use)=>{
        let cp:checkoutPage=new checkoutPage(page);
        await use(cp);
    }


})