const { test } = require('../support')


test.beforeEach(async ({ page }) => {
  await page.goTo.visit()
  await page.shortcuts.shortFunctions('Importação Dossiê Virtual', 	'Pesquisa Dossiê Virtual')
  await page.search.searchFolder('310345672')
})

test('importar documento', async ({ page }) => {
  await page.document.navigateToType('','07122025')
  await page.upload.folderDocument('C:\\playwright_projects\\ged\\Testes.pdf')
  await page.components.containText(/Documento \d+ enviado com sucesso./)
})

test('nao permitir importar documento sem a chave data do movimento', async ({ page }) => {
  await page.document.navigateToType('', '')
  await page.upload.folderDocument('C:\\playwright_projects\\ged\\Testes.pdf')
  await page.components.containText(/A chave DATA DO MOVIMENTO é obrigatório!/)
})

test('nao permitir importar documento sem selecionar o arquivo', async ({ page }) => {
  await page.document.navigateToType('', '07122025')
  await page.upload.notDocument()
  await page.components.containText(/O arquivo não foi selecionado./)
})

test('nao permitir importar documento com a data inválida', async ({ page }) => {
  await page.document.navigateToType('', '00000000')
  await page.upload.folderDocument('C:\\playwright_projects\\ged\\Testes.pdf')
  await page.components.containText(/A chave DATA DO MOVIMENTO não possui uma data válida!/)
})

test('nao permitir importar documento com o arquivo inválido', async ({ page }) => {
  await page.document.navigateToType('', '07122025')
  await page.upload.invalidFile('TESTES.sql')
})