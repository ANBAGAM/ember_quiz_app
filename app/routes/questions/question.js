import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class QuestionsQuestionRoute extends Route {
    @service store;

    async model(params) {
        console.log("question " + params.question_id);

        let question_id = params.question_id;
        let noOfQuestion = sessionStorage.getItem("TotalQuestion");
        this.questionNo = parseInt(question_id) + 1;
        if (noOfQuestion === params.question_id) {
            console.log("last question");
            this.questionNo = "";
        }
        console.log("questionNo " + this.questionNo);
        let q = this.store.peekRecord("question", question_id);
        q["totalQuestions"] = noOfQuestion;
        console.log("totalQuestions" + noOfQuestion)
        q["nextQuestion"] = this.questionNo;
        console.log("q " + q);
        return q;

    }
}

