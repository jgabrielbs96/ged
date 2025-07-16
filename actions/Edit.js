const { expect } = require('@playwright/test')


export class Edit {
    constructor(page) {
        this.page = page
    }

    async docEdit(year, date, orig) {
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt143"]').click()
        await this.page.locator('input[name="repeatKeys\\:1\\:keyInput"]').click()
        await this.page.locator('input[name="repeatKeys\\:1\\:keyInput"]').fill(year)
        await this.page.locator('input[name="repeatKeys\\:2\\:keyInput"]').click()
        await this.page.locator('input[name="repeatKeys\\:2\\:keyInput"]').fill(date)
        await this.page.locator('select[name="repeatKeys\\:3\\:j_idt87"]').click()
        await this.page.locator('select[name="repeatKeys\\:3\\:j_idt87"]').selectOption(orig)
        await this.page.getByRole('button', { name: 'Salvar' }).click()
    }

    async foldedit(type, year) {
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt143"]').click()
        await this.page.getByRole('combobox').selectOption(type)
        await this.page.locator('input[name="repeatKeys\\:1\\:keyInput"]').click()
        await this.page.locator('input[name="repeatKeys\\:1\\:keyInput"]').fill(year)
        await this.page.getByRole('button', { name: 'Salvar' }).click()
    }
}