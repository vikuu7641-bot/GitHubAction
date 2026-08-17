import { expect } from "playwright/test";
import { genericMethod } from "../BasePage/BasePage.js"
import { commanPage } from "../Pages/CommanPage.js";
import { homePage } from "../Pages/HomePage.js";
import { CartPage } from "../Pages/cartPage.js";
import { checkoutPage } from "../Pages/checkoutPage.js";
import { productPage } from "../Pages/productPage.js";
import { searchResultPage } from "../Pages/SearchResultPage.js";
import commanData from "../TestData/commanData.json" with {type: 'json'}
import testdata from "../TestData/testdata.json" with {type: 'json'}
import { test } from "../Fixture/Fixture.js"


let getProductPrice: string;


test("Scenario 1 : Testcases for Shopping Flow ", async ({ page, genericMethod, searchResultPageObj, homePageObj, cartPageObj, commanPageObj, productPageObj, checkoutPageObj }) => {


    await genericMethod.hitURL("https://www.amazon.com/");

    await page.waitForTimeout(2000);

    if (await commanPageObj.clickOnContinueShopping.isVisible()) {
        await commanPageObj.clickOnContinueShoppingButton();
    }

    await commanPageObj.clickOnSignIn();

    await commanPageObj.enterEmail(commanData.Authentication.email);

    await commanPageObj.clickOnContinue();

    await commanPageObj.enterPassword(commanData.Authentication.password);

    await commanPageObj.clickOnSignInButton();

    await homePageObj.enterProductName(testdata.productDetail.productName);

    await homePageObj.clickOnSearchedProduct();

    await searchResultPageObj.clickOnProduct();

    getProductPrice = await productPageObj.getProductPrice();

    await productPageObj.addProductToTheCart();

    await commanPageObj.clickOnAddToCart();

    await expect(cartPageObj.productName).toBeVisible();

    await expect(cartPageObj.productQuantity).toContainText(testdata.productDetail.productQuantity);

    await expect(cartPageObj.productPrice).toContainText(getProductPrice);

    await cartPageObj.clickOnProceedButton();

    await checkoutPageObj.clickOnNewDelivery();

    await checkoutPageObj.selectCountry(commanData.shippingAddress.Country);

    await page.waitForTimeout(2000);

    await checkoutPageObj.enterName(commanData.shippingAddress.Name);

    await checkoutPageObj.enterStreetAddress(commanData.shippingAddress.StreetAddress);

    await checkoutPageObj.enterCity(commanData.shippingAddress.City);

    await checkoutPageObj.enterState(commanData.shippingAddress.State);

    await checkoutPageObj.enterZIPCode(commanData.shippingAddress.ZIPCode);

    await checkoutPageObj.enterPhoneNumber(commanData.shippingAddress.PhoneNumber);


})


test("Scenario 2 : Cart verification", async ({ page, genericMethod, searchResultPageObj, homePageObj, cartPageObj, commanPageObj, productPageObj, checkoutPageObj }) => {

    await genericMethod.hitURL("https://www.amazon.com/");

    await page.waitForTimeout(2000);

    if (await commanPageObj.clickOnContinueShopping.isVisible()) {
        await commanPageObj.clickOnContinueShoppingButton();
    }

    await commanPageObj.clickOnSignIn();

    await commanPageObj.enterEmail(commanData.Authentication.email);

    await commanPageObj.clickOnContinue();

    await commanPageObj.enterPassword(commanData.Authentication.password);

    await commanPageObj.clickOnSignInButton();

    await homePageObj.enterProductName(testdata.productDetail.productName);

    await homePageObj.clickOnSearchedProduct();

    await searchResultPageObj.clickOnProduct();

    getProductPrice = await productPageObj.getProductPrice();

    await productPageObj.addProductToTheCart();

    await commanPageObj.clickOnAddToCart();

    await expect(cartPageObj.productName).toBeVisible();

    await page.waitForTimeout(2000);

    await expect(cartPageObj.productQuantity).toContainText("2");

    if (await cartPageObj.productPrice.innerText() < "$42.98") {
        expect(cartPageObj.productPrice).toBeVisible()
    }

    await cartPageObj.clickOnDecrementProductButton();

    await cartPageObj.clickOnTrashProductButton();

    await expect(cartPageObj.productQuantity).toContainText("0");





})