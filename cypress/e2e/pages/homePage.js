import BasePage from "./BasePage";
import settingsPage from "./SettingsPage";
import newPostPage from "./newPostPage";
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
  clickNewPostButton() {
    this.clickElement(this.getNewPost(), true);
    return newPostPage;
  }
}
const homePage = new HomePage();
export default homePage;
