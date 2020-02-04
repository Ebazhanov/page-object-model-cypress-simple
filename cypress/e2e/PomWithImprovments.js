import {HomePage} from '../page-objects/HomePage'

describe('Amazon test with POM improvements', () => {

    const homePage = new HomePage();
    const section1 = homePage.getDesktop1();
    const section2 = homePage.getDesktop2();
    const section3 = homePage.getDesktop3();
    const section4 = homePage.getDesktop4();

    describe('given `Home` page', () => {
        before(() => {
            cy.visit('/')
        });
        it('should verify presence of Slider in Section-1', () => {
            cy.get(section1.getSlider()).should('be.exist');
        });
        it('should verify presence of Slider in Section-2', () => {
            cy.get(section2.getSlider()).should('be.exist');
        });
        it('should verify presence of Slider in Section-3', () => {
            cy.get(section3.getSlider()).should('be.exist');
        });
        it('should verify presence of Slider in Section-4', () => {
            cy.get(section4.getSlider()).should('be.exist');
        });
    });
});
