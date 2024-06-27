import landingPage from "./pages/LandingPage";
import homePage from "./pages/HomePage";
import settingsPage from "./pages/SettingsPage";
import loginPage from "./pages/LoginPage";

describe("Login Functionality", () => {
  beforeEach(function () {
    cy.fixture("conduitLoginData").as("data");
  });
  it.only("Conduit - Valid Credentials", function () {
    cy.conduitLogin(this.data.validEmail, this.data.validPassword);
    homePage.checkYourFeedIsVisible();
    homePage.clickSettingsButton();
    settingsPage.clickLogoutButton();
  });
  it("Conduit - Invalid Credentials", function () {
    cy.conduitLogin(this.data.invalidEmail, this.data.invalidPassword);
    cy.get(".error-messages").should("contain", "email or password is invalid");
  });
  it("Prompt Alert", function () {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then(function ($win) {
      cy.stub($win, "prompt").returns("Hello Alert");
      cy.contains("Click for JS Prompt").click();
    });
    cy.get("#result").should("contain", "You entered: Hello Alert");
  });
});
