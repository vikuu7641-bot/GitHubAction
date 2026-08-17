import type { Locator, Page } from "playwright";
import { genericMethod } from "../BasePage/BasePage.js";

export class commanPage extends genericMethod {

    clickOnContinueShopping: Locator;
    signIn: Locator;
    email: Locator;
    continueButton: Locator;
    password: Locator;
    signInButton: Locator;
    addToCart:Locator;

    constructor(page: Page) {
        super(page);

        this.signIn = page.locator("//div[@id='nav-link-accountList']");
        this.clickOnContinueShopping = page.locator("//button[text()='Continue shopping']")
        this.email = page.locator("//input[@id='ap_email_login']");
        this.continueButton = page.locator("//input[@type='submit']");
        this.password = page.locator("//input[@id='ap_password']");
        this.signInButton = page.locator("//input[@id='signInSubmit']");
        this.addToCart=page.locator("//span[@class='nav-cart-icon nav-sprite']");
    }

    async clickOnSignIn() {
        await this.Click(this.signIn);
    }

    async clickOnContinueShoppingButton() {
        await this.Click(this.clickOnContinueShopping);
    }

    async enterEmail(email: string) {
        await this.Fill(this.email, email);
    }

    async clickOnContinue() {
        await this.Click(this.continueButton);
    }

    async enterPassword(password: string) {
        await this.Fill(this.password, password);
    }

    async clickOnSignInButton() {
        await this.Click(this.signInButton);
    }

    async clickOnAddToCart(){
        await this.Click(this.addToCart);
    }


}