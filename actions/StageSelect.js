const { expect } = require('@playwright/test');

export class StageSelect {
    constructor(page) {
        this.page = page
    }

    async dropdown(codope, stage) {
        await this.page.locator('//td[text()="Código Operação"]/following-sibling::td//input').fill(codope)
        await this.page.locator('#statusPendenciaEn').selectOption(stage)
        await this.page.getByRole('button', { name: 'Pesquisar' }).click()

        const checkbox = this.page.locator('.ui-chkbox-box')
        await checkbox.waitFor({ state: 'visible', timeout: 5000 })
        await checkbox.click()
    }
}