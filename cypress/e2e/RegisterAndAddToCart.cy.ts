import { IUser } from '../fixtures/UserInterface';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { getNewUser } from '../utils/RegisterUtils';

describe('New user registration and add to cart', () => {
  const registerPage = new RegisterPage();
  const homePage = new HomePage();
  const user: IUser = getNewUser();

  it('Verify new user registration and adding a product to the shopping car', () => {
    homePage.getIntoRegistrationPage();
    registerPage.register(user);
    registerPage.getResultMessage().should('contain', 'Your registration completed');
    registerPage.clickContinue();
    registerPage.getHeaderEmail().should('have.text', user.email);
  });
});
