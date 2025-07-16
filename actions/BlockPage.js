const { expect } = require('@playwright/test');


export class BlockPage {
    constructor(page) {
        this.page = page
    }

    async blockIce() {
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt143"]').click()
        const toast = this.page.locator('//span[@class="ui-growl-title"]')
        await expect(toast).toHaveText('Esse tipo documental não permite edição fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt148"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite cancelamento fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt152"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt153"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt154"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite vinculação fora dos fluxos IC e ICE.')
    }

    async blockIc() {
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt143"]').click()
        const toast = this.page.locator('//span[@class="ui-growl-title"]')
        await expect(toast).toHaveText('Esse tipo documental não permite edição fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt148"]').click();
        await expect(toast).toHaveText('Esse tipo documental não permite cancelamento fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt152"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt153"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt154"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite vinculação fora dos fluxos IC e ICE.')
    }

    async blockIceAgro() {
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt143"]').click()
        const toast = this.page.locator('//span[@class="ui-growl-title"]')
        await expect(toast).toHaveText('Esse tipo documental não permite edição fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt148"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite cancelamento fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt152"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt153"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:0\\:j_idt154"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite vinculação fora dos fluxos IC e ICE.')
    }

    async blockIcAgro() {
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt143"]').click()
        const toast = this.page.locator('//span[@class="ui-growl-title"]')
        await expect(toast).toHaveText('Esse tipo documental não permite edição fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt148"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite cancelamento fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt152"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt153"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite digitalização ou importação fora dos fluxos IC e ICE.')
        await this.page.locator('button[name="j_idt109\\:1\\:j_idt154"]').click()
        await expect(toast).toHaveText('Esse tipo documental não permite vinculação fora dos fluxos IC e ICE.')
    }
}

