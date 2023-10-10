describe('flooring calculator on GNL spec', () => {
  it('passes', () => {
    cy.visit('https://www.gamma.nl/assortiment/gamma-signature-xtra-breed-laminaat-wit-gerookt-eiken-2v-groef-8-mm-2-69-m2/p/B582169')
    cy.get(".js-calculate-field").clear()
    debugger
    cy.focused().type(5)
    cy.get(".js-calculate-button").click()
    cy.wait(2000);
    cy.get(".js-calculator-result-amount-number").should("have.text", "3")
  })
})