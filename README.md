Learn "Page object model" with cypress in two simple steps
---------------

### #1 This is the first example with simple abstraction
> Really simple just abstract your selectors

##### So here is the difference:
- example **without** POM [here](https://github.com/Ebazhanov/page-object-model-cypress-simple/blob/master/cypress/e2e/exampleWithoutPOM.js)
```javascript
    describe('given `Customer service` page', () => {
        before(() => {
            cy.visit('/gp/help/customer/display.html')
        });
        context('when user clicks on `My orders` button', () => {
            before(() => {
                cy.get('[alt="Meine Bestellungen"]').click();
            });
            it('should navigate user to `Login` page', () => {
                cy.get('.a-form-label').should('contain.text', 'E-Mail-Adresse');
            });
        });
    });
```

- second one **with** POM [here](https://github.com/Ebazhanov/page-object-model-cypress-simple/blob/master/cypress/e2e/exampleWithPOM.js)
```javascript
    describe('given `Customer service` page', () => {
        before(() => {
            cy.visit(homePage.navigateToCustomerServicePage())
        });
        context('when user clicks on `My orders` button', () => {
            before(() => {
                cy.get(customServicePage.getMyOrdersButton()).click();
            });
            it('should navigates user to `Login` page and assert Email-Address input label', () => {
                cy.get(loginPage.emailAddersInputTextLabel()).should('contain.text', 'E-Mail-Adresse');
            });
        });
    });
```

##### The diagram shows us:
- dependencies where we are keeping our locators/selectors
<img src="https://monosnap.com/image/nw7GXXmrnoTxFqLOVrn6VKMuzMjUcC"/>

### #2 The second example with improvements for complex pages and with lot of elements on it.
![amazon home page section](chrome-capture.gif)
- without POM improvements [here](https://github.com/Ebazhanov/page-object-model-cypress-simple/blob/master/cypress/e2e/PomWithoutImprovments.js)
```javascript
import {Desktop1} from '../page-objects/HomePage/Desktop1'
import {Desktop2} from '../page-objects/HomePage/Desktop2'
import {Desktop3} from '../page-objects/HomePage/Desktop3'
import {Desktop4} from '../page-objects/HomePage/Desktop4'

describe('Amazon test with POM improvements', () => {
    const section1 = new Desktop1();
    const section2 = new Desktop2();
    const section3 = new Desktop3();
    const section4 = new Desktop4();
```

- example with POM improvements [here](https://github.com/Ebazhanov/page-object-model-cypress-simple/blob/master/cypress/e2e/PomWithImprovments.js)
```javascript
import {HomePage} from '../page-objects/HomePage'

describe('Amazon test with POM improvements', () => {
    const homePage = new HomePage();
    const section1 = homePage.getDesktop1();
    const section2 = homePage.getDesktop2();
    const section3 = homePage.getDesktop3();
    const section4 = homePage.getDesktop4();
```

### General benefit from this structure is: 
- Reusability of the same selectors/locator in different classes/tests
- Clear and more readable architecture
- Easy to fix failed **tests** by fixing locator/selector in one place
- and etc... 

## Usage: 
- `npx cypress open`

