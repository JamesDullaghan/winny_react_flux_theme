var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  receivePosts: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_POSTS,
      json: json
    });
  },

  receivePost: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_POST,
      json: json
    });
  },

  receiveProfile: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_PROFILE,
      json: json
    });
  },

  receiveTeam: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TEAM,
      json: json
    });
  },

  receiveCreatedContact: function (json, errors) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_CONTACT,
      json: json,
      errors: errors
    });
  },

  receiveServices: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SERVICES,
      json: json
    });
  },

  receiveService: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SERVICE,
      json: json
    });
  },

  receiveGlobals: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_GLOBALS,
      json: json
    });
  },

  receiveServicesPage: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SERVICES_PAGE,
      json: json
    });
  },

  receiveAboutPage: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_ABOUT_PAGE,
      json: json
    });
  },

  receiveFacility: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_FACILITY,
      json: json
    });
  }
}
