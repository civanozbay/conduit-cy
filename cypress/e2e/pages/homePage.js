import BasePage from "./BasePage";
import settingsPage from "./SettingsPage";
class HomePage extends BasePage {
  getYourFeed() {
    return "Your Feed";
  }

  getGlobalFeed() {
    return "Global feed";
  }

  getHome() {
    return "Home";
  }

  getNewPost() {
    return "New Post";
  }

  getSettings() {
    return "Settings";
  }

  checkYourFeedIsVisible() {
    this.isElementVisible(this.getYourFeed(), true);
    return this;
  }
  clickSettingsButton() {
    this.clickElement(this.getSettings(), true);
    return settingsPage;
  }
}
const homePage = new HomePage();
export default homePage;
