import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class OptionsComponent extends Component {

    @tracked enableButton = true;
    @action
    logAnswer(option, model) {
        if (this.enableButton)
            this.enableButton = false;
        console.log("clicked " + option);
        console.log("correct ans=" + model.answer);
        if ((option === model.answer)) {
            model.status = "T";
        } else {
            model.status = "F";
        }
    }
}
