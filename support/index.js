const { test: base, expect } = require('@playwright/test')
const { BlockPage } = require('../actions/BlockPage')
const { Components } = require('../actions/Components')
const { GoTo } = require('../actions/GoTo')
const { Search } = require('../actions/Search')
const { CreateFolder } = require('../actions/CreateFolder')
const { IcPage } = require('../actions/IcPage')
const { Share } = require('../actions/Share')
const { Validation } = require('../actions/Validation')
const { Edit } = require('../actions/Edit')
const { Permission } = require('../actions/Permission')
const { Login } = require('../actions/Login')
const { Conformity } = require('../actions/Conformity')
const { Upload } = require('../actions/DocUpload')
const { Shortcuts } = require('../actions/Shortcuts')
const { StageSelect } = require('../actions/StageSelect')
const { CoverSheet } = require('../actions/CoverSheet')
const { DocumentType } = require('../actions/DocumentType')

 

const test = base.extend({
    page: async ({ page }, use) => {
        await use({
            ...page,
            block: new BlockPage(page),
            components: new Components(page),
            goTo: new GoTo(page),
            search: new Search(page),
            create: new CreateFolder(page),
            ic: new IcPage(page),
            share: new Share(page),
            validation: new Validation(page),
            edit: new Edit(page),
            permission: new Permission(page),
            conformity: new Conformity(page),
            upload: new Upload(page),
            shortcuts: new Shortcuts(page),
            stage: new StageSelect(page),
            login: new Login(page),
            cover: new CoverSheet(page),
            document: new DocumentType(page)
        })
    }
})
export { test, expect }