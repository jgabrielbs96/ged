const { test } = require('../support')


test('editar documento', async ({ page }) => {
  await page.goTo.visit()
  await page.search.simpleSearch('310345781')
  await page.edit.docEdit('2025', '30092025', 'Documento Nato-Digital (exclusivo para importação)')
  await page.components.containText(/O Documento foi editado com sucesso!/)
})

test('editar dossie', async ({ page }) => {
  await page.goTo.visit()
  await page.search.simpleSearch('310345634')
  await page.edit.foldedit('EXCESSOS SOBRE LIMITES', '2025')
  await page.components.containMessage(/Dossiê foi atualizado com Sucesso./)
})