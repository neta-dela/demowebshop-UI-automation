# DemoWebShop UI Automation

UI automation framework for the [DemoWebShop](https://demowebshop.tricentis.com) demo application, built with **Cypress** and **TypeScript** using the **Page Object Model (POM)**.

## Test Scenario

**New user registration and adding a product to the cart** (end-to-end, happy path)

1. Open the DemoWebShop home page.
2. Click **Register** and fill in the registration form with a unique, generated user.
3. Submit the form and verify the success message: _"Your registration completed"_.
4. Click **Continue** and verify that the registered email appears in the header.
5. Open the **Digital downloads** category.
6. Select a random product and click **Add to cart**.
7. Verify that the cart quantity in the header updates .
8. Open the **Shopping cart**.
9. Verify that the product name in the cart matches the selected product.

## Tech Stack

- [Cypress](https://www.cypress.io/): test runner
- [TypeScript](https://www.typescriptlang.org/): typed test code
- [Prettier](https://prettier.io/): code formatting

## Installation

```bash
git clone https://github.com/neta-dela/demowebshop-UI-automation.git
cd demowebshop-UI-automation
npm install
```

## Running the Tests

```bash
npm run cy:open   # interactive mode (Cypress Test Runner)
npm run cy:run    # headless mode (terminal)
```

## Project Structure

```
cypress/
├── e2e/                  # Test specs
├── pages/                # Page Objects (actions per page)
│   ├── BasePage.ts       # Shared header actions (menu, cart, account)
│   ├──CartPage.ts
│   ├── CategoryPage.ts
│   ├── HomePage.ts
│   └── RegisterPage.ts
├── selectors/             # Selectors, one file per page
├── utils/                # Test data generators
├── fixtures/
└── support/
cypress.config.ts         # Cypress configuration (baseUrl, timeouts)
tsconfig.json
.prettierrc
```

## Test Isolation and Cleanup

Each run creates a new user, so cart contents never carry over between runs. Cypress test isolation clears cookies and session data before every test, so no extra cleanup step is required.

## Git Workflow

Development is done on the `dev` branch and merged into `main` via Pull Request.
