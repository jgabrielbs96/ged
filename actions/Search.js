const { expect } = require('@playwright/test')


export class Search {
    constructor(page) {
        this.page = page
    }

    async advanceSearch(dossieid) {
        await this.page.locator('[id="formPrincipal:advancedSearchLink"]').click()
        await this.page.locator('[id="content"]').fill(dossieid)
        await this.page.locator('[id="j_idt130"]').click()
    }

    async simpleSearch(folderid) {
        await this.page.locator('[id="formPrincipal\\:autoCompleteSearch"]').fill(folderid)
        await this.page.locator('[id="formPrincipal\\:findBtnCL"]').click()
    }

    
    async searchFolder(folderid) {
        await this.page.getByRole('textbox', { name: 'Descrição:' }).fill(folderid)
        await this.page.getByRole('button', { name: 'Pesquisar' }).click()
        await this.page.getByRole('link', { name: /DOSSIÊ CONTA CORRENTE/ }).click()
    }

    async result() {
        await this.page.getByRole('link', { name: 'DOSSIÊ CONTA CORRENTE -' }).click()
        await expect(this.page.getByText(/Detalhes do DOSSIÊ CONTA CORRENTE - CONTROLES INTERNOS/)).toBeVisible()
        await this.page.getByRole('link', { name: 'TRILHA DE AUDITORIA -' }).click()
        await this.page.getByRole('link', { name: 'Fechar' }).click()
    }
}