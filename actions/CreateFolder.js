const { expect } = require('@playwright/test');
export class CreateFolder {


    constructor(page) {
        this.page = page
    }

    async folder(year) {
        await this.page.getByRole('button', { name: 'Novo' }).click()
        await this.page.getByRole('link', { name: 'Visualizar árvore de Tipos' }).click()
        await this.page.getByText('DOSSIÊ CONTA CORRENTE - CONTROLES INTERNOS').click()
        await this.page.locator('input[name="repeatKeys:1:keyInput"]').click()
        await this.page.locator('input[name="repeatKeys:1:keyInput"]').fill(year)
        await this.page.locator('input[name="repeatKeys:1:keyInput"]').click()
        await this.page.locator('input[name="repeatKeys:1:keyInput"]').fill(year)
        await this.page.getByRole('button', { name: 'Salvar' }).click()
    }
}