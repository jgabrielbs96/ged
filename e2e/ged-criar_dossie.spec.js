const { test } = require('../support')

test.beforeEach(async ({page}) => {
  await page.goTo.visit()
  await page.shortcuts.shortFunctions('Criar Dossiê', 'Pesquisa de Dossiês Virtuais')
  })

test('criar_dossie_corretamente', async ({ page }) => {
  await page.create.folder('2025')
  await page.components.containMessage(/Registro \d+ incluído com sucesso!/)
  await page.document.navigateToType('Importar', '07122025')
  await page.upload.folderDocument('C:\\playwright_projects\\ged\\Testes.pdf')
  await page.components.containText(/Documento \d+ enviado com sucesso./)
})

test('nao permitir criar dossie sem a chave ANO', async ({ page }) => {
  await page.create.folder('')
  await page.components.containMessage('A chave ANO é obrigatório!')
})



























// test('nao permitir criar dossie sem a chave Tipo de Documento', async ({ page }) => {
//   await createPage.visit()
//   await createPage.folder('', '2025', /A chave TIPO DE DOCUMENTO é obrigatório!/)

// })


// test('nao permitir importar documento sem a chave origem do documento', async ({ page }) => {
//   await createPage.visit()
//   await createPage.folder('EXCESSOS SOBRE LIMITES', '2025', /Registro \d+ incluído com sucesso!/)
//   await createPage.document('07122025', '', 'Testes.pdf', /A chave O documento origem é é obrigatório!/)

// })

