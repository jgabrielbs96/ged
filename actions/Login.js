import { expect } from "@playwright/test"


export class Login {
    constructor(page) {
        this.page = page
    }

    async submit(user, password) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(user)
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password)
        await this.page.getByRole('button', { name: 'Login' }).click()
        await expect(this.page.getByText('Bem-vindo ao GED')).toBeVisible()
    }
}