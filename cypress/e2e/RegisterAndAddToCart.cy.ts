import { IUser } from '../fixtures/UserInterface';
import { getNewUser } from '../utils/RegisterUtils';
import { homePage, registerPage, categoryPage, cartPage } from '../pages';

describe('New user registration and add to cart', () => {
  const user: IUser = getNewUser();

  it('Verify new user registration and adding a product to the shopping car', () => {
    homePage.getIntoRegistrationPage();
    registerPage.register(user);
    registerPage.getResultMessage().should('contain', 'Your registration completed');
    registerPage.clickContinue();
    registerPage.getHeaderEmail().should('have.text', user.email);
    categoryPage.addRandomProductToCart();
    categoryPage.getCartQty().should('contain', '(1)');
    categoryPage.openShoppingCart();
    cy.get<string>('@selectedProduct').then((productName) => {
      cartPage.getProductName().should('have.text', productName);
    });
  });
});
