const clientInfo = require('../../fixtures/client.json')

context('Dashboard', () => {

    before(()=>{
        cy.visit(clientInfo.url)
        cy.login()
    })
    
    it('Hoşgeldiniz yazısı ekranda gözükmelidir', () => {
        cy.get('#welcome-label').should('contains.text', 'HOŞGELDİNİZ');
    })
})