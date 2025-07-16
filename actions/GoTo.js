import { expect, firefox } from "@playwright/test"


export class GoTo {
    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('URL')
        await expect(this.page.getByText('Bem-vindo ao GED')).toBeVisible()
    }

    async visitFirefox() {
        const browser = await firefox.launch({ headless: true })
        const page = await browser.newPage()
        await this.page.goto('URL')
        return page
    }
}