import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chat', { path: '/chat/:user_name' } );
  this.route('new');
  this.route('posts');
});

export default Router;


