class HomePage {
  getYourFeed() {
    return "Your feed";
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
    cy.contains(this.getYourFeed()).should("be.visible");
  }
  clickSettingsButton() {
    cy.contains(this.getSettings()).click();
  }
}
