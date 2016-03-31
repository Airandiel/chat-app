/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    //apiHost: 'https://chatair.firebaseio.com/',
    modulePrefix: 'workspace',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: 'https://chatair.firebaseio.com/',
    torii: {  
      sessionServiceName: 'session'
    },  
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  if (environment === 'development') {
    //ENV.apiHost: 'http://localhost:8080'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }
  //ENV.contentSecurityPolicy['connect-src'] += ' ' + ENV.apiHost;
  //adapters/application.js
  //import DS from 'ember-data';
  //import ENV from 'portal/config/environment';
  //export default DS.RESTAdapter.extend({
    // host: ENV.apiHost

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
