import CustomServicePage from '../page-objects/CustomServicePage'
import {HomePage} from '../page-objects/HomePage/HomePage'
import LoginPage from '../page-objects/LoginPage'

describe('Amazon test with simple POM', () => {

    const customServicePage = new CustomServicePage();
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    before(() => {
        cy.visit('/')
    });

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
});
