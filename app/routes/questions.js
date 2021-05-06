import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestionsRoute extends Route {
    @service router;

    beforeModel() {
        let validateSession = sessionStorage.getItem("userName");
        if (!validateSession) {
            console.log("not logged in");
            // this.transitionTo('index');
            this.router.transitionTo('index');
        }
    }
    async model() {
        console.log("questions ")
        let data = await this.store.findAll("question");
        console.log("totalquestions" + data.length);
        sessionStorage.setItem("TotalQuestion", data.length);
        sessionStorage.setItem("score", 0);
        return data;
    }


}

