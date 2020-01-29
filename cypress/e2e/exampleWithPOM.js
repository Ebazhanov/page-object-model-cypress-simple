import CustomServicePage from '../page-objects/CustomServicePage'



describe('Amazon test example', () => {

    const customServicePage = new CustomServicePage();

    before(() => {
        cy.visit('/')
    });
    
    describe('given `Customer service` page', () => {
        before(() => {
            cy.visit('/gp/help/customer/display.html')
        });
        context('when user clicks on `My orders` button', () => {
            before(() => {
                cy.get(customServicePage.getProposedProjectName()).click();
            });
            it('should navigate user to `Login` page', () => {
                cy.get('.a-form-label').should('contain.text', 'E-Mail-Adresse');
            });
        });
    });
});
