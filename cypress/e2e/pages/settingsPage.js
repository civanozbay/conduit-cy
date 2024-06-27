import BasePage from "./BasePage";
import landingPage from "./LandingPage";
class SettingsPage extends BasePage {
  getLogoutButton() {
    return "Or click here to logout.";
  }
  clickLogoutButton() {
    this.clickElement(this.getLogoutButton(), true);
    return landingPage;
  }
}
const settingsPage = new SettingsPage();
export default settingsPage;
