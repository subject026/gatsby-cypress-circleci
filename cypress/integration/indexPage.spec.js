import "cypress-axe";

beforeEach(() => {
  cy.visit(`http://localhost:${Cypress.env('MODE') === 'test' ? 9000 : 8000}`);
  cy.injectAxe();
});

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("Homepage a11y", () => {
    // cy.configureAxe({
    //   branding: {
    //     brand: String,
    //     application: String
    //   },
    //   reporter: "option",
    //   checks: [Object],
    //   rules: [Object],
    //   locale: Object
    // });
    cy.checkA11y();
  });
});