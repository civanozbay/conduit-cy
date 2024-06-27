import BasePage from "./BasePage";
import loginPage from "./LoginPage";
class LandingPage extends BasePage {
  getSignin() {
    return "Sign in";
  }
  clickSigninButton() {
    this.clickElement(this.getSignin(), true);
    return loginPage;
  }
}
const landingPage = new LandingPage();
export default landingPage;
