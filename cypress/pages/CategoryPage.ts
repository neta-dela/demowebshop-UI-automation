import { categoryLocators } from '../selestors/CategoryPage';
import { getRandomIndex } from '../utils/DataGenerator';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {
  addRandomProductToCart() {
    this.clickDigitalDownloads();
    cy.get(categoryLocators.productItem).then((products) => {
      const index = getRandomIndex(products.length);
      cy.wrap(products.eq(index)).within(() => {
        cy.get(categoryLocators.productTitle)
          .invoke('text')
          .then((name) => cy.wrap(name.trim()).as('selectedProduct'));
        cy.get(categoryLocators.addToCartButton).click();
      });
    });
  }
}
