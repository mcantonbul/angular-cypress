const clientInfo = require('../../fixtures/client.json');

context('Login', () => {
    beforeEach(() => {
        cy.visit(clientInfo.url)
    })

    it('Kullanıcı Adı Şifre Yanlış Uyarısı', () => {
        cy.get('input[name="username"]').type(clientInfo.username)
        cy.get('input[name="password"]').type(clientInfo.wrongpassword)
        cy.get('button[type=submit]').click()
        cy.get('div[role="alertdialog"]').should('contain.text', 'Kullanıcı adı veya şifreyi yanlış girdiniz')
    })

    it('Giriş Yapılabilmeli',()=>{
        cy.login()
        cy.url().should('include', '/dashboard')
    })
});