const { expect } = require('@playwright/test')


export class DocumentType {
    constructor(page) {
        this.page = page
    }

    async navigateToType(option, date) {
        const button = this.page.getByRole('button', { name: `${option} um documento para` });

        if (await button.isVisible().catch(() => false)) {
            await button.click();
        }

        await this.page.getByRole('link', { name: 'Visualizar árvore de Tipos' }).click();
        await this.page.getByText('EXCESSOS SOBRE LIMITES', { exact: true }).click();
        await this.page.locator('input[name="repeatKeys\\:2\\:keyInput"]').click();
        await this.page.locator('input[name="repeatKeys\\:2\\:keyInput"]').fill(date);
    }

}