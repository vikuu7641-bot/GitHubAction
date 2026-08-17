# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shoppingFlow.spec.ts >> Scenario 1 : Testcases for Shopping Flow 
- Location: tests\shoppingFlow.spec.ts:17:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//span[@id=\'sc-subtotal-label-activecart\']')
Timeout: 5000ms
- Expected substring  -  1
+ Received string     + 37

- 1
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+ Subtotal (2 items):

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//span[@id=\'sc-subtotal-label-activecart\']')
    13 × locator resolved to <span id="sc-subtotal-label-activecart" class="a-size-medium sc-number-of-items">↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵↵Subtotal (2 i…</span>
       - unexpected value "



































Subtotal (2 items):"

```

```yaml
- text: "Subtotal (2 items):"
```

# Test source

```ts
  1   | import { expect } from "playwright/test";
  2   | import { genericMethod } from "../BasePage/BasePage.js"
  3   | import { commanPage } from "../Pages/CommanPage.js";
  4   | import { homePage } from "../Pages/HomePage.js";
  5   | import { CartPage } from "../Pages/cartPage.js";
  6   | import { checkoutPage } from "../Pages/checkoutPage.js";
  7   | import { productPage } from "../Pages/productPage.js";
  8   | import { searchResultPage } from "../Pages/SearchResultPage.js";
  9   | import commanData from "../TestData/commanData.json" with {type: 'json'}
  10  | import testdata from "../TestData/testdata.json" with {type: 'json'}
  11  | import { test } from "../Fixture/Fixture.js"
  12  | 
  13  | 
  14  | let getProductPrice: string;
  15  | 
  16  | 
  17  | test("Scenario 1 : Testcases for Shopping Flow ", async ({ page, genericMethod, searchResultPageObj, homePageObj, cartPageObj, commanPageObj, productPageObj, checkoutPageObj }) => {
  18  | 
  19  | 
  20  |     await genericMethod.hitURL("https://www.amazon.com/");
  21  | 
  22  |     await page.waitForTimeout(2000);
  23  | 
  24  |     if (await commanPageObj.clickOnContinueShopping.isVisible()) {
  25  |         await commanPageObj.clickOnContinueShoppingButton();
  26  |     }
  27  | 
  28  |     await commanPageObj.clickOnSignIn();
  29  | 
  30  |     await commanPageObj.enterEmail(commanData.Authentication.email);
  31  | 
  32  |     await commanPageObj.clickOnContinue();
  33  | 
  34  |     await commanPageObj.enterPassword(commanData.Authentication.password);
  35  | 
  36  |     await commanPageObj.clickOnSignInButton();
  37  | 
  38  |     await homePageObj.enterProductName(testdata.productDetail.productName);
  39  | 
  40  |     await homePageObj.clickOnSearchedProduct();
  41  | 
  42  |     await searchResultPageObj.clickOnProduct();
  43  | 
  44  |     getProductPrice = await productPageObj.getProductPrice();
  45  | 
  46  |     await productPageObj.addProductToTheCart();
  47  | 
  48  |     await commanPageObj.clickOnAddToCart();
  49  | 
  50  |     await expect(cartPageObj.productName).toBeVisible();
  51  | 
> 52  |     await expect(cartPageObj.productQuantity).toContainText(testdata.productDetail.productQuantity);
      |                                               ^ Error: expect(locator).toContainText(expected) failed
  53  | 
  54  |     await expect(cartPageObj.productPrice).toContainText(getProductPrice);
  55  | 
  56  |     await cartPageObj.clickOnProceedButton();
  57  | 
  58  |     await checkoutPageObj.clickOnNewDelivery();
  59  | 
  60  |     await checkoutPageObj.selectCountry(commanData.shippingAddress.Country);
  61  | 
  62  |     await page.waitForTimeout(2000);
  63  | 
  64  |     await checkoutPageObj.enterName(commanData.shippingAddress.Name);
  65  | 
  66  |     await checkoutPageObj.enterStreetAddress(commanData.shippingAddress.StreetAddress);
  67  | 
  68  |     await checkoutPageObj.enterCity(commanData.shippingAddress.City);
  69  | 
  70  |     await checkoutPageObj.enterState(commanData.shippingAddress.State);
  71  | 
  72  |     await checkoutPageObj.enterZIPCode(commanData.shippingAddress.ZIPCode);
  73  | 
  74  |     await checkoutPageObj.enterPhoneNumber(commanData.shippingAddress.PhoneNumber);
  75  | 
  76  | 
  77  | })
  78  | 
  79  | 
  80  | test("Scenario 2 : Cart verification", async ({ page, genericMethod, searchResultPageObj, homePageObj, cartPageObj, commanPageObj, productPageObj, checkoutPageObj }) => {
  81  | 
  82  |     await genericMethod.hitURL("https://www.amazon.com/");
  83  | 
  84  |     await page.waitForTimeout(2000);
  85  | 
  86  |     if (await commanPageObj.clickOnContinueShopping.isVisible()) {
  87  |         await commanPageObj.clickOnContinueShoppingButton();
  88  |     }
  89  | 
  90  |     await commanPageObj.clickOnSignIn();
  91  | 
  92  |     await commanPageObj.enterEmail(commanData.Authentication.email);
  93  | 
  94  |     await commanPageObj.clickOnContinue();
  95  | 
  96  |     await commanPageObj.enterPassword(commanData.Authentication.password);
  97  | 
  98  |     await commanPageObj.clickOnSignInButton();
  99  | 
  100 |     await homePageObj.enterProductName(testdata.productDetail.productName);
  101 | 
  102 |     await homePageObj.clickOnSearchedProduct();
  103 | 
  104 |     await searchResultPageObj.clickOnProduct();
  105 | 
  106 |     getProductPrice = await productPageObj.getProductPrice();
  107 | 
  108 |     await productPageObj.addProductToTheCart();
  109 | 
  110 |     await commanPageObj.clickOnAddToCart();
  111 | 
  112 |     await expect(cartPageObj.productName).toBeVisible();
  113 | 
  114 |     await page.waitForTimeout(2000);
  115 | 
  116 |     await expect(cartPageObj.productQuantity).toContainText("2");
  117 | 
  118 |     if (await cartPageObj.productPrice.innerText() < "$42.98") {
  119 |         expect(cartPageObj.productPrice).toBeVisible()
  120 |     }
  121 | 
  122 |     await cartPageObj.clickOnDecrementProductButton();
  123 | 
  124 |     await cartPageObj.clickOnTrashProductButton();
  125 | 
  126 |     await expect(cartPageObj.productQuantity).toContainText("0");
  127 | 
  128 | 
  129 | 
  130 | 
  131 | 
  132 | })
```