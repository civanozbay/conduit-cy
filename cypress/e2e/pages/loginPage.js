import BasePage from "./BasePage";
class LoginPage extends BasePage {
  getEmail() {
    return 'input[type="email"]';
  }
  getPassword() {
    return 'input[type="password"]';
  }
  getSigninButton() {
    return 'button[type="submit"]';
  }
  enterEmail(email) {
    this.fillText(this.getEmail(), email);
  }

  enterPasssword(password) {
    this.fillText(this.getPassword, password);
  }

  clickSignin(password) {
    this.fillText(this.getSigninButton);
  }
}
const loginPage = new LoginPage();
export default loginPage;
