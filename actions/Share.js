const { expect } = require('@playwright/test')


export class Share {
    constructor(page) {
        this.page = page
    }

    async shareItem(buttonName, user) {
        await this.page.locator(`button[name="${buttonName}"]`).click();
        await this.page.locator('#j_idt62').fill(user);
        await this.page.getByRole('button', { name: 'Pesquisar' }).click();
        await this.page.locator('[id="selecaoUsuarios\\:0\\:j_idt94"]').click();
        await this.page.getByRole('button', { name: 'Salvar' }).click();
    }
    
    async shareDoc(user) {
        await this.shareItem('j_idt109:0:j_idt150', user);
    }
    
    async shareFold(user) {
        await this.shareItem('j_idt109:0:j_idt149', user);
    }
    
}