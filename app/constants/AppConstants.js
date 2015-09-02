var keyMirror = require('keymirror');

var production = true;
var facilityId = 1;

if (production) {
  var APIRoot =  'http://api.winny.io/'
} else {
  var APIRoot = 'http://localhost:3002/'
}

module.exports = {
  Settings: {
    production: production,
    facilityId: facilityId,
    APIRoot: APIRoot
  },

  APIEndpoints: {
    POSTS: APIRoot + "v1/posts?facility_id=" + facilityId,
    POST: APIRoot + "v1/posts",
    PROFILE: APIRoot + "v1/profile?facility_id=" + facilityId,
    TEAM: APIRoot + "v1/team?facility_id=" + facilityId,
    CONTACTS: APIRoot + "v1/contacts?facility_id=" + facilityId,
    SERVICES: APIRoot + "v1/services?facility_id=" + facilityId,
    SERVICE: APIRoot + "v1/services",
    GLOBALS: APIRoot + "v1/globals?facility_id=" + facilityId,
    PAGE: APIRoot + "v1/pages?facility_id=" + facilityId,
    FACILITY: APIRoot + "v1/facility/?facility_id=" + facilityId
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    LOAD_POSTS: null,
    RECEIVE_POSTS: null,
    LOAD_POST: null,
    RECEIVE_POST: null,
    LOAD_PROFILE: null,
    RECEIVE_PROFILE: null,
    LOAD_TEAM: null,
    RECEIVE_TEAM: null,
    CREATE_CONTACT: null,
    LOAD_SERVICES: null,
    RECEIVE_SERVICES: null,
    LOAD_SERVICE: null,
    RECEIVE_SERVICE: null,
    LOAD_GLOBALS: null,
    RECEIVE_GLOBALS: null,
    RECEIVE_SERVICES_PAGE: null,
    LOAD_SERVICES_PAGE: null,
    RECEIVE_ABOUT_PAGE: null,
    LOAD_ABOUT_PAGE: null,
    RECEIVE_FACILITY: null,
    LOAD_FACILITY: null
  })
};
