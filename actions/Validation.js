const { expect } = require('@playwright/test')


export class Validation {
    constructor(page) {
        this.page = page
    }

    async validation(considerations) {
        await this.page.locator('#documentNfTable\\:0\\:conformidade').click()
        await this.page.locator('#j_idt220').fill(considerations)
        await this.page.getByRole('button', { name: 'Inserir Considerações' }).click()
        await this.page.locator('#messages').getByText('Registro incluído com sucesso!').textContent()
        await this.page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default').click()
        await this.page.getByRole('button', { name: 'Validar' }).click()
        await this.page.locator('#messages').getByText(/Documento aprovado com sucesso!/).textContent()
    }

    async alert() {
        await this.page.locator('#j_idt250_container').getByText('Registro incluído com sucesso!')
    }
}