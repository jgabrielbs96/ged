const { test } = require('../support')


test('permissao dossie ice e ic', async ({ page }) => {
    await page.goTo.visit()
    await page.search.simpleSearch('4000160131000030538')
    await page.block.blockIce()
    await page.block.blockIc()
})

test('permissao dossie ice agro e ic', async ({ page }) => {
    await page.goTo.visit()
    await page.search.simpleSearch('4000160131000030539')
    await page.block.blockIceAgro()
    await page.block.blockIcAgro()
})