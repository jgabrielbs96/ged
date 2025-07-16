const { expect } = require('@playwright/test');


export class Conformity {
    constructor(page) {
        this.page = page
    }

    async toConformity() {
        await this.page.getByRole('button', { name: 'Enviar Para Conformidade' }).click()
        await this.page.locator('#messages').getByText('Instrumento de Crédito atualizado com sucesso!!').textContent()
    }

    async doneConformity(type) {
        await this.page.getByRole('button', { name: `${type}`, exact: true }).click()  // type: Conformidade / Conformidade Agroamigo
        await this.page.locator('#j_idt97').check()
        await this.page.getByRole('button', { name: 'Validar sem Ressalvas' }).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
        await this.page.locator('#messages').getByText('Operação realizada com sucesso!').textContent()
    }

    async doneConformityRes(type) {
        await this.page.getByRole('button', { name: `${type}`, exact: true }).click()
        await this.page.getByRole('checkbox', { name: 'IC APRESENTA INTEGRIDADE EM' }).check()
        await this.page.getByRole('button', { name: 'Validar com Ressalvas' }).click()
        await this.page.getByRole('dialog', { name: 'Confirmação' }).getByRole('link').click()
        await this.page.getByRole('listitem').filter({ hasText: 'AUSENCIA COMPROVAÇÕES DE' }).locator('div').nth(1).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
        await this.page.locator('#messages').getByText('Operação realizada com sucesso!').textContent()
    }
// IC Físico
    async doneConformityIc() {
        await this.page.getByRole('button', { name: 'Realizar Conformidade', exact: true }).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator('#j_idt88').check()
        await this.page.getByRole('button', { name: 'Validar sem Ressalvas' }).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
        const alert = this.page.locator('#messages')
        await expect(alert).toHaveText(/Operação realizada com sucesso!/)
    }

    async doneConformityResIc() {   //comRessalva
        await this.page.getByRole('button', { name: 'Realizar Conformidade', exact: true }).click()
        await this.page.getByRole('checkbox', { name: 'A representação legal das' }).check()
        await this.page.getByRole('button', { name: 'Validar com Ressalvas' }).click()
        await this.page.getByRole('dialog', { name: 'Confirmação' }).getByRole('link').click()
        await this.page.getByRole('listitem').filter({ hasText: 'ADITIVO APRESENTA RASURAS - OP. COM GARANTIA REAL' }).locator('div').nth(1).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
        
        const alert = this.page.locator('#messages')
        await expect(alert).toHaveText(/Operação realizada com sucesso!/)
    }
}