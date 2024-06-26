class LoginPage {
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
    cy.get(this.getEmail()).type(email);
  }

  enterPasssword(password) {
    cy.get(this.getPassword()).type(password);
  }

  clickSignin(password) {
    cy.get(this.getSigninButton()).click();
  }
}

export default LoginPage;
