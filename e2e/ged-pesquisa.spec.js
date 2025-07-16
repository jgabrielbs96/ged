const { test } = require('../support')


test('pesquisa_simples', async ({ page }) => {
  await page.goTo.visit()
  await page.search.simpleSearch('310345634')
  await page.search.result()
})

test('pesquisa_avancada', async ({ page }) => {
  await page.goTo.visit()
  await page.search.advanceSearch('310345634')
  await page.search.result()
})