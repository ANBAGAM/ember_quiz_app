import EmberRouter from '@ember/routing/router';
import config from 'ember-quiz/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('questions', function () {
    this.route('question', { path: '/:question_id' });
    this.route('result');
  });
  this.route('not-found');
});
