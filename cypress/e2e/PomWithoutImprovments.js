import {Desktop1} from '../page-objects/HomePage/Desktop1'
import {Desktop2} from '../page-objects/HomePage/Desktop2'
import {Desktop3} from '../page-objects/HomePage/Desktop3'
import {Desktop4} from '../page-objects/HomePage/Desktop4'

describe('Amazon test with POM improvements', () => {

    const section1 = new Desktop1();
    const section2 = new Desktop2();
    const section3 = new Desktop3();
    const section4 = new Desktop4();

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
