import { Blockexplorer } from './app.po'

describe('Blockexplorer App', () => {
    let page: Blockexplorer

    beforeEach(() => {
        page = new Blockexplorer()
    })

    it('should display welcome message', () => {
        page.navigateTo()
        // expect(page.getParagraphText()).toEqual('Welcome to Block Explorer!');
    })
})
