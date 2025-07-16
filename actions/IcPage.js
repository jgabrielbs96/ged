const { expect } = require('@playwright/test')


export class IcPage {
    constructor(page) {
        this.page = page
    }

    async coverPage(codope) {
        await this.page.getByRole('link', { name: 'Gerenciar Instrumentos de Crédito', exact: true }).click()
        await this.page.locator('#j_idt91').fill(codope)
        await this.page.locator('#statusPendenciaEn').selectOption('1')
        await this.page.getByRole('button', { name: 'Pesquisar' }).click()
        await this.page.locator('.ui-chkbox-box').first().click()
        await this.page.getByRole('button', { name: 'Folha de Rosto' }).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
        await this.page.locator('#statusPendenciaEn').selectOption('2')
        await this.page.getByRole('button', { name: 'Pesquisar' }).click()
        const alert = this.page.locator('#messages')
        await expect(alert).toHaveText(/Folha de Rosto impressa com sucesso!/)
    }

    async scan() {
        await this.page.locator('#statusPendenciaEn').selectOption('2')
        await this.page.getByRole('button', { name: 'Pesquisar' }).click()
        await this.page.locator('.ui-chkbox-box').first().click()
        const digitalizarButton = await this.page.getByRole('button', { name: 'Digitalizar' })
        await digitalizarButton.waitFor({ state: 'visible', timeout: 60000 })
        await expect(digitalizarButton).toBeEnabled()
        await digitalizarButton.click()
        await this.page.getByRole('button', { name: 'Capturar' }).click()
        await this.page.waitForTimeout(3000)
        await this.page.getByRole('button', { name: 'Confirmar' }).click()
        this.page.on('dialog', async dialog => {
            await dialog.accept()
        })
    }

    async accordance() {
        await this.page.locator('#statusPendenciaEn').selectOption('3')
        await this.page.getByRole('button', { name: 'Pesquisar' }).click()
        await this.page.locator('.ui-chkbox-box').first().click()
        await this.page.getByRole('button', { name: 'Realizar Conformidade', exact: true }).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator('#j_idt88').check()
        await this.page.getByRole('button', { name: 'Validar sem Ressalvas' }).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
        const alert = this.page.locator('#messages')
        await expect(alert).toHaveText(/Operação realizada com sucesso!/)
    }

    async accordanceRestriction() {
        await this.page.locator('#statusPendenciaEn').selectOption('3')
        await this.page.getByRole('button', { name: 'Pesquisar' }).click()
        await this.page.locator('.ui-chkbox-box').first().click()
        await this.page.getByRole('button', { name: 'Realizar Conformidade', exact: true }).click()
        await this.page.getByRole('checkbox', { name: 'A representação legal das' }).check()
        await this.page.getByRole('button', { name: 'Validar com Ressalvas' }).click()
        await this.page.getByRole('dialog', { name: 'Confirmação' }).getByRole('link').click()
        await this.page.getByRole('listitem').filter({ hasText: 'ADITIVO APRESENTA RASURAS - OP. COM GARANTIA REAL' }).locator('div').nth(1).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
        const alert = this.page.locator('#messages')
        await expect(alert).toHaveText(/Operação realizada com sucesso!/)
    }

    async pack(cover) {
        await this.page.getByRole('link', { name: 'Home' }).click()
        await this.page.getByRole('link', { name: 'Acondicionar', exact: true }).click()
        await this.page.locator('#filterIC').click()
        await this.page.locator('input[name="codOper1"]').fill(codope)
        await this.page.locator('[id="instrumentos\\:1\\:j_idt110"]').click()
        await this.page.locator('#codEtiq').fill(cover)
        await this.page.getByRole('button', { name: 'Acondicionar' }).click()
        await this.page.getByRole('button', { name: 'Imprimir' }).click()
    }
}