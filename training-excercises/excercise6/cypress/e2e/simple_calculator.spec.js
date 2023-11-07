describe("Calculator test suite", () => {
  beforeEach(() => {
    cy.visit("/src/index.html");
  });

  it("displays the title of the page in an H1", () => {
    //Get one or more DOM elements by selector or alias
    //https://docs.cypress.io/api/commands/get
    cy.get("h1").should("have.text", "Welcome to the online calculator");
  });

  it("checks the text in the H2", () => {
    //Get the DOM element containing the text. DOM elements can contain more than the desired text and still match.
    //https://docs.cypress.io/api/commands/contains
    cy.contains("Adding").should("have.text", "Adding two numbers");
    //https://docs.cypress.io/api/commands/should
  });


  it("displays the sum of the two input fields for addition", () => {
    cy.get("input[name=term1]").type(1);
    cy.get("input[name=term2]").type(45);
    cy.get("form").submit();

    //https://docs.cypress.io/api/commands/debug
    //You need to have your Developer Tools open for .debug() to hit the breakpoint.
    cy.get("form").debug();
    cy.get("input[name=result]").should("have.value", "46");
  });
});
