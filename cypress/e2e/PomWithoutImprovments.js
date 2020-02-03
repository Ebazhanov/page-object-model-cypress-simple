import {Desktop1} from '../page-objects/HomePage/Desktop1'
import {Desktop2} from '../page-objects/HomePage/Desktop2'
import {Desktop3} from '../page-objects/HomePage/Desktop3'
import {Desktop4} from '../page-objects/HomePage/Desktop4'

describe('Amazon test with POM improvements', () => {

    const desktop1 = new Desktop1();
    const desktop2 = new Desktop2();
    const desktop3 = new Desktop3();
    const desktop4 = new Desktop4();

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
