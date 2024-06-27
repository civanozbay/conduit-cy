/// <reference types="Cypress" />
import landingPage from "./pages/LandingPage";
describe("Mock Testing", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("conduitLoginData").then((data) => {
      this.data = data;
      landingPage
        .clickSigninButton()
        .enterEmail(this.data.validEmail)
        .enterPasssword(this.data.validPassword)
        .clickSigninButton();
    });
  });

  it("Tag Mock", function () {
    cy.intercept("GET", "/api/tags", { fixture: "Tags.json" });
    cy.contains("Your Feed").should("be.visible");
    cy.get("div.tag-list")
      .should("contain", "cypress")
      .and("contain", "unit")
      .and("contain", "unit");
  });

  it("Article Mock", function () {
    cy.intercept("GET", "/api/articles/*", { fixture: "Article.json" });
    cy.contains("Your Feed").should("be.visible");
    cy.contains("Global Feed").click();
    cy.get(".col-md-9").should("contain", "Demo Mock Cypress");
  });

  it("Login User Mock", function () {
    cy.intercept("POST", "/api/users/login", { fixture: "Login.json" });
    cy.get('a[href^="#@"]').should("contain", "Civan");
  });
});
