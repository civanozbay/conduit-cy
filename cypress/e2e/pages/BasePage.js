/// <reference types="Cypress" />

class BasePage {
  navigateTo(url) {
    cy.visit(url);
  }
  // Common method for element clicking
  clickElement(locator, useContains = false) {
    if (useContains) cy.contains(locator).click();
    else cy.get(locator).click();
  }
  // Common method for entering text
  fillText(locator, textToEnter, useContains = false) {
    if (useContains) {
      cy.contains(locator).type(textToEnter);
    } else {
      cy.get(locator).type(textToEnter);
    }
  }
  // Common method to retrieve text from an element
  getElementText(locator, useContains = false) {
    if (useContains) {
      cy.contains(locator).getElementText("text");
    } else {
      cy.get(locator).getElementText("text");
    }
  }
  // Common method to assert if an element to be visible
  isElementVisible(locator, useContains = false) {
    if (useContains) {
      cy.contains(locator).should("be.visible");
    } else {
      cy.get(locator).should("be.visible");
    }
  }
}
export default BasePage;
