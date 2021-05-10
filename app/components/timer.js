import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { later, once } from '@ember/runloop';
import moment from 'moment';
import Timer from "ember-stopwatch/utils/timer";
import { inject as service } from '@ember/service';
export default class TimerComponent extends Component {

    @service router;
    //timer;
    maxMin = 5;//max mins 
    remainingTimeInSec = this.maxMin * 60;
    displayHours = 0;
    displayMinutes = 0;
    displaySeconds = 0;
    handleInterval;
    constructor() {
        super(...arguments);
        // this.watch();
        this.startTimer();
    }
    // @action
    // watch() {
    //     this.timer = new Timer(this.maxMin*60000);
    //     this.timer.on("expired", this, this.expirationHandler);
    //     this.timer.start();
    //     console.log(this.timer.remainingMillis);
    //     console.log(this.timer)
    // }
    // expirationHandler() {
    //     console.log('Time is up!');

    //     sessionStorage.setItem("autoSubmit",true);
    //     this.router.transitionTo('/questions/result');
    // }

    updateTimer() {
        if (sessionStorage.getItem("isCompleted") && sessionStorage.getItem("isCompleted") === "true") {
            clearInterval(this.handleInterval);
        }
        let reference = this;
        reference.remainingTimeInSec = parseInt(reference.remainingTimeInSec) - 1;
        if (reference.remainingTimeInSec === 0) {
            clearInterval(this.handleInterval);
            sessionStorage.setItem("autoSubmit", true);
            reference.router.transitionTo('/questions/result');
        }
        else {
            let hours = Math.floor(reference.remainingTimeInSec / 3600);
            let minutes = Math.floor(reference.remainingTimeInSec / 60);
            if (!this.isDestroyed) {
                Ember.set(reference, 'displayHours', hours);
                Ember.set(reference, 'displayMinutes', (minutes) % 60);
                Ember.set(reference, 'displaySeconds', reference.remainingTimeInSec - minutes * 60);
            }
        }
    }
    @action
    startTimer() {
        let reference = this;
        let minutes = Math.floor(reference.remainingTimeInSec / 60);
        if (!reference.isDestroyed) {
            Ember.set(reference, 'displayHours', Math.floor(reference.remainingTimeInSec / 3600));
            Ember.set(reference, 'displayMinutes', minutes % 60);
            Ember.set(reference, 'displaySeconds', reference.remainingTimeInSec - minutes * 60);
        }
        this.handleInterval = setInterval(function () {
            reference.updateTimer();
        }, 1000);
    }
}
