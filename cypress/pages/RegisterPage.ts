import { IUser } from '../fixtures/UserInterface';
import { headerLocators } from '../selestors/header';
import { registerLocators } from '../selestors/RegisterPage';
import { Gender } from '../utils/RegisterUtils';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  selectGender(gender: Gender) {
    cy.get(registerLocators.gender[gender]).check();
  }

  fillDetails(user: IUser) {
    this.selectGender(user.gender);
    cy.get(registerLocators.firstName).type(user.firstName);
    cy.get(registerLocators.lastName).type(user.lastName);
    cy.get(registerLocators.email).type(user.email);
    cy.get(registerLocators.password).type(user.password);
    cy.get(registerLocators.confirmPassword).type(user.confirmPassword);
  }
  submit() {
    cy.get(registerLocators.submitButton).click();
  }
  getResultMessage() {
    return cy.get(registerLocators.resultMessage);
  }

  clickContinue() {
    cy.get(registerLocators.continueButton).click();
  }

  register(user: IUser) {
    this.fillDetails(user);
    this.submit();
  }
}
