import { headerLocators } from '../selestors/header';

export class BasePage {
  clickRegister() {
    cy.get(headerLocators.registerButton).click();
  }

  getHeaderEmail() {
    return cy.get(headerLocators.emailAccount);
  }

  clickDigitalDownloads() {
    cy.get(headerLocators.digitalDownloadsButton).click();
  }

  openShoppingCart() {
    cy.get(headerLocators.shoppingCart).click();
  }

  getCartQty() {
    return cy.get(headerLocators.cartQty);
  }
}
