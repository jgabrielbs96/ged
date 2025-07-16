const { test } = require('../support')
const { executeSQL } = require('../support/db2ConnectorDev')
const { faker } = require('@faker-js/faker')


test('fluxo ic sem ressalvas', async ({ page }) => {
test.setTimeout(120000)

  const sql = "UPDATE FLEXPS.BNB_IC SET BNB_IC_STATUS = 1 WHERE BNB_IC_ID IN (6751309)"
  await executeSQL(sql)

  await page.components.visitFirefox()
  await page.components.loginDev('c023300', 'J*gbs8960')
  await page.ic.coverPage('200016C200023101002')
  await page.ic.scan()
  await page.ic.accordance()
})

// test('fluxo ic com ressalvas', async ({ page }) => {
// test.setTimeout(120000)

//   const sql = "UPDATE FLEXPS.BNB_IC SET BNB_IC_STATUS = 3 WHERE BNB_IC_ID IN (6751293)"
//   await executeSQL(sql)

//   await page.components.visitFirefox()
//   await page.components.loginDev()
//   await page.ic.coverPage('400016C300003401003')
//   await page.ic.scan()
//  await page.ic.accordanceRestriction()
// await page.ic.pack(envelopeName)
// await page.components.containText('Operações de crédito acondicionadas com sucesso.')

// })