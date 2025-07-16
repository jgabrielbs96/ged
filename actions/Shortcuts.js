const { expect } = require('@playwright/test');


export class Shortcuts {
    constructor(page) {
        this.page = page
    }

    async shortFunctions(func, menuTitle) {
        await this.page.getByRole('link', { name: `${func}` }).click()

        const title = this.page.locator('span.infoPanelHeader', {
            hasText: `${menuTitle}`
        });

        await expect(title).toBeVisible();

    }
}