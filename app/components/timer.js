import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { later, once } from '@ember/runloop';
import moment from 'moment';
import Timer from "ember-stopwatch/utils/timer";
import {inject as service} from '@ember/service';
export default class TimerComponent extends Component {

    @service router;
    timer
    maxMin = 2;//max mins 
    constructor() {
        super(...arguments);
        this.watch();
    }
    @action
    watch() {
        this.timer = new Timer(this.maxMin*60000);
        this.timer.on("expired", this, this.expirationHandler);
        this.timer.start();
        console.log(this.timer.remainingMillis);
        console.log(this.timer)
    }
    expirationHandler() {
        console.log('Time is up!');

        sessionStorage.setItem("autoSubmit",true);
        this.router.transitionTo('/questions/result');
    }


}
