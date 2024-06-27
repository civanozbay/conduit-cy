import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";

describe("Login Functionality", () => {
  const landingPage = new LandingPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const settingsPage = new SettingsPage();
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
