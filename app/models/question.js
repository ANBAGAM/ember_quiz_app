import Model, { attr } from '@ember-data/model';

export default class QuestionModel extends Model {

    @attr question;
    @attr options;
    @attr answer;
    @attr('string', { defaultValue() { return ""; } }) status;


}
