const { expect } = require('@playwright/test')


export class Permission {
    constructor(page) {
        this.page = page
    }

    async checkFolderAccess(folder, shouldHaveAccess = true) {
        await this.page.getByRole('link', { name: `DOSSIÊ DE TESTE PERMISSÃO ${folder} (` }).click()

        if (shouldHaveAccess) {
            await expect(this.page.getByText('Detalhes do DOSSIÊ DE TESTE')).toBeVisible()
        } else {
            await expect(this.page.getByRole('gridcell', { name: 'Usuário não possui acesso a este documento.' })).toBeVisible()
        }

        await this.page.getByRole('link', { name: 'Home' }).click()
        await this.page.locator('[id="formPrincipal\\:autoCompleteSearch"]').clear()
    }
}



