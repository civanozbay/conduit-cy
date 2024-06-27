import BasePage from "./BasePage";
class SettingsPage extends BasePage {
  getLogoutButton() {
    return "Or click here to logout.";
  }
  clickLogoutButton() {
    this.clickElement(this.getLogoutButton(), true);
  }
}
export default SettingsPage;
