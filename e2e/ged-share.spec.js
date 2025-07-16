const { test } = require('../support')


test('compartilhar documento', async ({ page }) => {
  await page.goTo.visit()
  await page.search.simpleSearch('310346038')
  await page.share.shareDoc('USER')
  await page.components.containMessage(/Operação realizada com sucesso!/)
})

test('compartilhar dossie', async ({ page }) => {
  await page.goTo.visit()
  await page.search.simpleSearch('USER')
  await page.share.shareFold('C014811')
  await page.components.containMessage(/Operação realizada com sucesso!/)
})
