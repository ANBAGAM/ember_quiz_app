import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import EmberResolver from 'ember-resolver';

export default class FinalButtonComponent extends Component {

    @service router;

    @action
    playAgain() {
        sessionStorage.setItem("autoSubmit",false);
        this.router.transitionTo('/questions/1');
    }
    @action
    signOut() {

        sessionStorage.clear();
        this.router.transitionTo('/');
    }
}