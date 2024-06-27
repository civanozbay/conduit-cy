import BasePage from "./BasePage";
class LandingPage extends BasePage {
  getSignin() {
    return "Sign in";
  }
  clickSigninButton() {
    this.clickElement(this.getSignin(), true);
  }
}
const landingPage = new LandingPage();
export default landingPage;
