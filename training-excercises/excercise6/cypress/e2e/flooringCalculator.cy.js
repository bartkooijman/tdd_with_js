describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.gamma.nl/assortiment/gamma-signature-xtra-breed-laminaat-wit-gerookt-eiken-2v-groef-8-mm-2-69-m2/p/B582169')
    cy.get(".js-calculate-field").clear()
    debugger
    cy.focused().type(5)
    cy.get(".js-calculate-button").click()
    cy.wait(2000);
    cy.get(".js-calculator-result-amount-number").should("have.text", "3")
  })

  it('fails', () => {
    cy.visit('https://www.gamma.nl/')
    //Queries: https://docs.cypress.io/api/commands/as 
    //Actions: https://docs.cypress.io/api/commands/type
    //Assertions: https://docs.cypress.io/api/commands/should
    cy.get("h2").should("have.text", "Waar ben je naar op zoek?")
    cy.get("#reactheader form")
    cy.get("p:first")
  })
})