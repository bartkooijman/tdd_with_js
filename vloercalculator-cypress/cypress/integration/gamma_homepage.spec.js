describe("Gamma nl test suite", () => {
  it("opens the homepage and uses the mega dropdown", () => {
    cy.visit("https://www.gamma.nl/");
    cy.get(".sc-hTRkXV > span").click();
    cy.wait(2000);
    cy.get(".sc-TtZnY:nth-child(9) > .sc-amiJK").click();
    cy.wait(2000);
    cy.get(".sc-eirqVv > .sc-hHEiqL").click();
    cy.wait(2000);
    cy.url().should(
      "contains",
      "https://www.gamma.nl/assortiment/k/ijzerwaren"
    );
    cy.get("row category-container");
  });
});
