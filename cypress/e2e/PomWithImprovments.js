import {HomePage} from '../page-objects/HomePage'

describe('Amazon test with POM improvements', () => {

    const homePage = new HomePage();
    const desktop1 = homePage.getDesktop1();
    const desktop2 = homePage.getDesktop2();
    const desktop3 = homePage.getDesktop3();
    const desktop4 = homePage.getDesktop4();

    describe('given `Home` page', () => {
        before(() => {
            cy.visit('/')
        });
        it('should verify presence of Slider in Desktop-1', () => {
            cy.get(desktop1.getSlider()).should('be.exist');
        });
        it('should verify presence of Slider in Desktop-2', () => {
            cy.get(desktop2.getSlider()).should('be.exist');
        });
        it('should verify presence of Slider in Desktop-3', () => {
            cy.get(desktop3.getSlider()).should('be.exist');
        });
        it('should verify presence of Slider in Desktop-4', () => {
            cy.get(desktop4.getSlider()).should('be.exist');
        });
    });
});
