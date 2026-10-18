import { homePageLocators } from '../selestors/HomePage';

export class HomePage {
  visit() {
    cy.visit('/');
  }

  clickRegister() {
    cy.get(homePageLocators.registerButton).click();
  }

  getIntoRegistrationPage() {
    this.visit();
    this.clickRegister();
  }
}
