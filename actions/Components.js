import { expect, firefox } from "@playwright/test"


export class Components {
    constructor(page) {
        this.page = page
    }

    async visitFirefox() {
        const browser = await firefox.launch({ headless: true })
        const page = await browser.newPage()
        await this.page.goto('URL')
        return page
    }

    async visitPermission(user, password) {
        await this.visitFirefox()
        await this.loginDev(user, password)
    }

    async loginDev(user, password) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(user)
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password)
        await this.page.getByRole('button', { name: 'Login' }).click()
        await expect(this.page.getByText('Bem-vindo ao GED')).toBeVisible()
    }

    async containText(message) {
        const toast = this.page.locator('//span[@class="ui-growl-title"]')
        await expect(toast).toContainText(message)
        await expect(toast).not.toBeVisible({ timeout: 6000 })
    }

    async containMessage(message) {
        const alert = this.page.locator('#messages')
        await expect(alert).toContainText(message)
    }
}