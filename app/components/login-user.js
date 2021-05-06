import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class LoginUserComponent extends Component {
    @service router;
    @tracked userName = "";
    @tracked nameError = "";

    @action
    logUserInfo() {
        if (this.userName !== "") {
            console.log(this.userName);
            sessionStorage.setItem("userName", this.userName);
            this.nameError = "";
            this.router.transitionTo('/questions/1');
        } else {
            this.nameError = "Enter a valid name";
        }
    }

}
