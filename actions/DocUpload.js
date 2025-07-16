const { expect } = require('@playwright/test')


export class Upload {
    constructor(page) {
        this.page = page
    }

    async folderDocument(file) {
        await this.page.locator('#fileUploadComponent_input').setInputFiles(file)
        await this.page.getByRole('button', { name: 'Concluir Importação' }).click()
        await this.page.locator('#j_idt21').click()
    }

    async notDocument() {
        await this.page.getByRole('button', { name: 'Concluir Importação' }).click()
    }

    async invalidFile(file) {
        await this.page.locator('#fileUploadComponent_input').setInputFiles(file)
        await expect(this.page.getByText('Invalid file type')).toBeVisible()
    }

    async iceDocument(file) {
        await this.page.getByRole('button', { name: 'Disponível para importação' }).click()
        await this.page.selectOption('select[class="pula"]', 'Documento Nato-Digital (exclusivo para importação)')

        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.getByRole('button', { name: 'Adicionar' }).click(),
        ])
        await fileChooser.setFiles(file)
        await this.page.getByRole('button', { name: 'Concluir Importação' }).click()
    }

    async icDocument() {
        const digButton = await this.page.getByRole('button', { name: 'Digitalizar' })
        await digButton.waitFor({ state: 'visible', timeout: 60000 }) // Aumentar o timeout para 60 segundos
        await expect(digButton).toBeEnabled() // Garantir que o botão está habilitado
        await digButton.click()

        await this.page.getByRole('button', { name: 'Capture' }).click()
        await this.page.waitForTimeout(3000)
        await this.page.getByRole('button', { name: 'Confirm' }).click()

        this.page.on('dialog', async dialog => {
            await dialog.accept()
        })
    }
}