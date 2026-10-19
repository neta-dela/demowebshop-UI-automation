import { cartLocators } from '../selestors/CartPage';

export class CartPage {
  getProductName() {
    return cy.get(cartLocators.productName);
  }
}
