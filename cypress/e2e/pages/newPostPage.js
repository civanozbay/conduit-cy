import BasePage from "./BasePage";

class NewPostPage extends BasePage {
  getArticleTitle() {
    return "input[placeholder='Article Title']";
  }
  getArticleAbout() {
    return 'input[placeholder="What\'s this article about?"]';
  }

  getWriteArticle() {
    return 'textarea.form-control[placeholder="Write your article (in markdown)"]';
  }

  getEnterTags() {
    return "input[placeholder='Enter tags']";
  }

  enterArticleTitle(text) {
    this.fillText(this.getArticleTitle(), text);
    return this;
  }
  enterArticleAbout(text) {
    this.fillText(this.getArticleAbout(), text);
    return this;
  }
  enterArticle(text) {
    this.fillText(this.getWriteArticle(), text);
    return this;
  }

  enterTags(text) {
    this.fillText(this.getEnterTags(), text);
    return this;
  }
}

const newPostPage = new NewPostPage();
export default newPostPage;
