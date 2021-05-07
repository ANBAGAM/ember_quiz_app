import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class ResultRoute extends Route {
    @service store;

    model() {
        let data = this.store.peekAll("question");

        let results = {
            correctAnswer: 0,
            notAttempted: 0,
            wrongAnswer: 0,
            isAutosubmitted: false
        }
        console.log(data.length);

        if (sessionStorage.getItem("autoSubmit") && sessionStorage.getItem("autoSubmit") === "true") {
            results.isAutosubmitted = true;
        }

        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                results.correctAnswer = data.objectAt(i).status === "T" ? results.correctAnswer + 1 : results.correctAnswer;
                results.notAttempted = data.objectAt(i).status === "" ? results.notAttempted + 1 : results.notAttempted;
                results.wrongAnswer = data.objectAt(i).status === "F" ? results.wrongAnswer + 1 : results.wrongAnswer;
            }
        }
        console.log("score == " + results)
        return results;
    }

}

