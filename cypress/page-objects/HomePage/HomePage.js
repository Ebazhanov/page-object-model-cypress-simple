import {Desktop1} from './Desktop1'
import {Desktop2} from './Desktop2'
import {Desktop3} from './Desktop3'
import {Desktop4} from './Desktop4'

export class HomePage {

    navigateToCustomerServicePage() {
        return '/gp/help/customer/display.html';
    }

    getDesktop1() {
        return new Desktop1();
    }

    getDesktop2() {
        return new Desktop2();
    }

    getDesktop3() {
        return new Desktop3();
    }

    getDesktop4() {
        return new Desktop4();
    }
}
