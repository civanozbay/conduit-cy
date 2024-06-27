/// <reference types="Cypress" />
import homePage from "./pages/HomePage";
import landingPage from "./pages/LandingPage";

describe("Login Functionality", () => {
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
  it("Conduit - Valid Credentials", function () {
    homePage.checkYourFeedIsVisible().clickSettingsButton().clickLogoutButton();
  });
  it("Conduit - Invalid Credentials", function () {
    cy.conduitLogin(this.data.invalidEmail, this.data.invalidPassword);
    cy.get(".error-messages").should("contain", "email or password is invalid");
  });
});
