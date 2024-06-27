import BasePage from "./BasePage";
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
  }
  clickSettingsButton() {
    this.clickElement(this.getSettings(), true);
  }
}
const homePage = new HomePage();
export default homePage;
