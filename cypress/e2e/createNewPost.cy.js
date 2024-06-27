/// <reference types="Cypress" />
import homePage from "./pages/HomePage";
import landingPage from "./pages/LandingPage";

describe("Create New Post", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("conduitLoginData").then((data) => {
      landingPage
        .clickSigninButton()
        .enterEmail(data.validEmail)
        .enterPasssword(data.validPassword)
        .clickSigninButton();
    });
  });
  it("Create a new post", function () {
    homePage
      .clickNewPostButton()
      .enterArticleTitle("TEST")
      .enterArticleAbout("Automation")
      .enterArticle("Testing pyramid starts with unit and integration testing.")
      .enterTags("#Automation #Test");
  });
});
