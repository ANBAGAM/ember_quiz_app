import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class HeaderComponent extends Component {
    @tracked uName = "";

    get userName() {
        this.uName = sessionStorage.getItem("userName");
        console.log(this.uName);
        return this.uName;
    }
}
