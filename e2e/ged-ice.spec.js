const { test } = require('../support')
const {resetStatus} = require('../support/sqlUtils')
const { executeSQL } = require('../support/db2Connector')

test.beforeEach(async ({page}) => {
  test.setTimeout(60000)

  await executeSQL(resetStatus)

  await page.goTo.visit()
  await page.shortcuts.shortFunctions('Gerenciar Instrumentos de Crédito Eletrônico', 'Gerenciar Instrumentos de Crédito Eletrônico')
})

test('fluxo ice sem ressalvas', async ({ page }) => {
    await page.stage.dropdown('200017C000011002076', '1')
    await page.upload.iceDocument('C:\\playwright_projects\\ged\\Testes.pdf')
    await page.stage.dropdown('200017C000011002076', '2')
    await page.conformity.toConformity()
    await page.stage.dropdown('200017C000011002076', '3')
    await page.conformity.doneConformity('Conformidade')
})

test('fluxo ice com ressalvas', async ({ page }) => {
    await page.stage.dropdown('200017C000011002008', '1')
    await page.upload.iceDocument('C:\\playwright_projects\\ged\\Testes.pdf')
    await page.stage.dropdown('200017C000011002008', '2')
    await page.conformity.toConformity()
    await page.stage.dropdown('200017C000011002008', '3')
    await page.conformity.doneConformityRes('Conformidade')
})

test('fluxo ice agro sem ressalvas', async ({ page }) => {
    await page.stage.dropdown('200017C000011002036', '1')
    await page.upload.iceDocument('C:\\playwright_projects\\ged\\Testes.pdf')
    await page.stage.dropdown('200017C000011002036', '2')
    await page.conformity.toConformity()
    await page.stage.dropdown('200017C000011002036', '3')
    await page.conformity.doneConformity('Conformidade Agroamigo')
})

test('fluxo ice agro com ressalvas', async ({ page }) => {
    await page.stage.dropdown('200017C000011002041', '1')
    await page.upload.iceDocument('C:\\playwright_projects\\ged\\Testes.pdf')
    await page.stage.dropdown('200017C000011002041', '2')
    await page.conformity.toConformity()
    await page.stage.dropdown('200017C000011002041', '3')
    await page.conformity.doneConformityRes('Conformidade Agroamigo')
})
