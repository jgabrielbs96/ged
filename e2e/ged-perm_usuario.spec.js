const { test } = require('../support')

const { userA, userB, userC } = require('../support/dossies')

async function permissionFolder(page, usuario) {
    await page.goTo.visitFirefox()
    await page.login.submit(usuario.matricula, usuario.senha)

    for (const { numero, folder, acesso } of usuario.dossies) {
        await page.search.simpleSearch(numero)
        await page.permission.checkFolderAccess(folder, acesso)
    }
}

test('usuario a - deve acessar todos os dossies', async ({ page }) => {
    await permissionFolder(page, userA)
})

test('usuario b - deve acessar dossies 1 e 2', async ({ page }) => {
    await permissionFolder(page, userB)
})

test('usuario c - deve acessar apenas o dossie 3', async ({ page }) => {
    await permissionFolder(page, userC)
})




















// test('usuario a - deve acessar todos os dossies', async ({ page }) => {
//     await page.components.visitPermission('F048755', 'bnb@2024')

//     for (const { numero, folder } of dossies) {
//         await page.search.simpleSearch(numero)
//         await page.permission.checkFolderAccess(folder, acesso)
//     }
// })


// test('usuario a - deve acessar todos os dossies', async({page}) => {
//     await page.components.visitPermission('F048755', 'bnb@2024')
//     await page.search.simpleSearch('326072752')
//     await page.permission.acessFolder('1')
//     await page.search.simpleSearch('326072754')
//     await page.permission.acessFolder('2')
//     await page.search.simpleSearch('326072756')
//     await page.permission.acessFolder('3')
//     await page.search.simpleSearch('326072758')
//     await page.permission.acessFolder('4')
// })

// test('usuario b - deve acessar dossies 1 e 2', async({page}) => {
//     await page.components.visitPermission('C009585', 'bnb@2024')
//     await page.search.simpleSearch('326072752')
//     await page.permission.acessFolder('1')
//     await page.search.simpleSearch('326072754')
//     await page.permission.acessFolder('2')
//     await page.search.simpleSearch('326072756')
//     await page.permission.noAcessFolder('3')
//     await page.search.simpleSearch('326072758')
//     await page.permission.noAcessFolder('4')
// })

// test('usuario c - deve acessar apenas o dossie 3', async({page}) => {
//     await page.components.visitPermission('J000709', 'bnb@2024')
//     await page.search.simpleSearch('326072752')
//     await page.permission.noAcessFolder('1')
//     await page.search.simpleSearch('326072754')
//     await page.permission.noAcessFolder('2')
//     await page.search.simpleSearch('326072756')
//     await page.permission.acessFolder('3')
//     await page.search.simpleSearch('326072758')
//     await page.permission.noAcessFolder('4')
// })