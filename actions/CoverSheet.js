const { expect } = require('@playwright/test');

export class CoverSheet {
    constructor(page) {
        this.page = page
    }

    async coverPage() {
        await this.page.getByRole('button', { name: 'Folha de Rosto' }).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
    }
}