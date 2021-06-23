import "cypress-axe";

// beforeEach(() => {
// });

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
  
  it("Homepage a11y", () => {
    cy.visit("http://localhost:8000");
    cy.injectAxe();
    cy.checkA11y();
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
  });
});
