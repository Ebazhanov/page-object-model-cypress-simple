describe('Amazon test without POM', () => {
    before(() => {
        cy.visit('/')
    });
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
});
