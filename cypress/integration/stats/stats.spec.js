const clientInfo = require('../../fixtures/client.json')

context('Stats', () => {

    before(() => {
        cy.visit(clientInfo.url)
        cy.login()
    })

    beforeEach(()=>{
        cy.intercept('GET','**/season_averages**').as('getStats')
    })

    it('Stats sayfası açılmalıdır.', () => {
        cy.get('[href="/stats"]').click({ force: true });
        cy.url().should('include', '/stats')
    })

    it("LeBron James'in istatistikleri sorgulanmalıdır.", () => {
        cy.wait('@getStats').its('response.statusCode').should('be.oneOf', [200, 304])
        cy.get('.games-played-label').should("exist")
    })
})