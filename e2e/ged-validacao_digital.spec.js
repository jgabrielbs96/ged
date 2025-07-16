const { test } = require('../support');


test('ged-validacao_digital', async ({ page }) => {
  await page.goTo.visit()
  await page.shortcuts.shortFunctions('Validação Digital', 'Validação Digital')
  await page.validation.validation('Testes Automatizados.')
});