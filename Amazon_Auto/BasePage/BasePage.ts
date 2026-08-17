import type { Download, FileChooser, Frame, FrameLocator, Locator, Page } from "playwright";

export class genericMethod {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    //==============================================< Pages Method >===================================================================//


    async hitURL(URL: string) {
        await this.page.goto(URL);
    }

    async Title(): Promise<string> {
        return await this.page.title();
    }

    URL(): string {
        return this.page.url();
    }

    async Back() {
        await this.page.goBack();
    }

    async Forward() {
        await this.page.goForward();
    }

    async Reload() {
        await this.page.reload();
    }

    async Close() {
        await this.page.close();
    }


    //==============================================< Locator Method >===================================================================//


    async Click(element: Locator) {
        await element.click();
    }

    async Fill(element: Locator, value: string) {
        await element.fill(value);
    }
    async Type(element: Locator, value: string) {
        await element.pressSequentially(value);
    }

    async Clear(element: Locator) {
        await element.clear();
    }

    async Check(element: Locator) {
        await element.check();
    }

    async Uncheck(element: Locator) {
        await element.uncheck();
    }


    //==============================================< Keyboards Method >===================================================================//


    async DoubleClick(element: Locator) {
        await element.dblclick();
    }

    async rightClick(element: Locator) {
        await element.click({ button: "right" });
    }

    async forceClick(element: Locator) {
        await element.click({ force: true });
    }

    async Hover(element: Locator) {
        await element.hover();
    }

    async scrollToBottom() {
        this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async scrollToElement(element: Locator): Promise<void> {
        await element.scrollIntoViewIfNeeded();
    }

    async press(element: Locator, keyword: string) {
        await element.press(keyword);
    }

    async pressEnter(element: Locator) {
        await element.press("pressEnter");
    }

    async pressTab(element: Locator) {
        await element.press("pressTab");
    }


    //==============================================< Validations Method >===================================================================//    


    async Count(element: Locator): Promise<number> {
        return await element.count();
    }

    async getAttribute(element: Locator, attributeName: string): Promise<string | null> {
        return await element.getAttribute(attributeName);
    }

    async InnerText(element: Locator): Promise<string> {
        return await element.innerText();
    }

    async TextContent(element: Locator): Promise<string | null> {
        return await element.textContent();
    }

    async InputValue(element: Locator): Promise<string> {
        return await element.inputValue();

    }


    //==============================================< Dropdown Method >===================================================================//  


    async dropdownSelectByLabel(element: Locator, option: string) {
        await element.selectOption({ label: option });
    }

    async dropdownSelectByIndex(element: Locator, dropdownIndex: number) {
        await element.selectOption({ index: dropdownIndex });
    }

    async dropdownSelectByValue(element: Locator, optionValue: string) {
        await element.selectOption({ value: optionValue });
    }

    async getAllElementFromDropdown(element: Locator,): Promise<string[]> {
        let allElement: string[] = await element.allTextContents();
        return allElement;
    }


    //==============================================< Alert Method >===================================================================//  


    async dialogAccept() {
        this.page.on('dialog', (dialog) => {
            dialog.accept();
        })
    }

    async dialogDismiss() {
        this.page.on('dialog', (dialog) => {
            dialog.dismiss();
        })
    }

    async dialogDefaultValue(page: Page): Promise<string | undefined> {
        let value: string | undefined;
        page.on('dialog', async (dialog) => {
            value = dialog.defaultValue();
        })
        return value;
    }

    async dialogGetMessage() {
        this.page.on('dialog', (dialog) => {
            dialog.message();
        })
    }

    async dialogType() {
        this.page.on('dialog', (dialog) => {
            dialog.type();
        })
    }


    //==============================================< Indexing Method >===================================================================//  


    async FirstIndex(element: Locator): Promise<Locator> {
        return element.first();
    }

    async LastIndex(element: Locator): Promise<Locator> {
        return element.last();;
    }

    async NTH(element: Locator, index: number): Promise<Locator> {
        return element.nth(index);
    }


    //==============================================< Screenshot Method >===================================================================//  


    async takeElementScreenshot(element: Locator, path: string) {
        await element.screenshot({ path: path });
    }

    async fullPageScreenshot(path: string) {
        await this.page.screenshot({ path: path, fullPage: true });
    }



    //==============================================< Window Handling Method >===================================================================//  

    async switchToNewWindowByIndex(index: number): Promise<Page> {

        let pages: Page[] = this.page.context().pages();
        let page: Page = pages[index]!;
        return page;
    }


    async switchToWindowByURL(URL_Parts: string): Promise<Page> {

        const pages: Page[] = this.page.context().pages();
        for (const p of pages) {
            if (p.url().includes(URL_Parts)) {
                await p.bringToFront();
                return p;
            }
        }
        throw new Error("Page not found");
    }






    async switchToWindowByTitle(Title_Parts: string): Promise<Page> {
        let allPages: Page[] = this.page.context().pages()
        let tab: Page | undefined;
        for (let p of allPages) {
            if (p.url().includes(Title_Parts)) {
                return p;
            }
        }
        throw new Error("Page not found");
    }

    async switchToWindowByText(Text_Parts: string): Promise<Page> {
        let allPages: Page[] = this.page.context().pages()
        let tab: Page | undefined;
        for (let p of allPages) {
            if (p.url().includes(Text_Parts)) {
                return p;
            }
        }
        throw new Error("Page not found");
    }


    //==============================================< Frame Method >===================================================================//  


    async getFrameLocator(page: Page, frame: string): Promise<FrameLocator> {
        return page.frameLocator(frame);
    }

    async getFrameByName(page: Page, frameName: string): Promise<Frame | null> {
        return page.frame({ name: frameName });
    }

    //=============================================< Upload File >========================================================================//

    async uploadFile(element: Locator, filePath: string) {
        await element.setInputFiles(filePath);
    }

    async uploadMultipleFiles(element: Locator, filePath: string[]) {
        await element.setInputFiles(filePath);
    }

    async removeUploadFile(element: Locator, filePath: string) {
        await element.setInputFiles(filePath);
    }

    async clickAndUpload(element: Locator, filePath: string) {
        let fileChooserPromise: Promise<FileChooser> = this.page.waitForEvent("filechooser");
        await element.click();
        let fileChooser: FileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filePath);
    }

    async clickAndSave(element: Locator, filePath: string) {
        let fileChooserPromise: Promise<Download> = this.page.waitForEvent("download");
        await element.click();
        let fileChooser: Download = await fileChooserPromise;
        await fileChooser.saveAs(filePath);
    }

}