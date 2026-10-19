import { headerLocators } from '../selestors/header';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  visit() {
    cy.visit('/');
  }

  getIntoRegistrationPage() {
    this.visit();
    this.clickRegister();
  }
}
