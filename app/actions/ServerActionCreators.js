import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

export default {
  receivePosts(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_POSTS,
      json: json
    });
  },

  receivePost(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_POST,
      json: json
    });
  },

  receiveProfile(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_PROFILE,
      json: json
    });
  },

  receiveTeam(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TEAM,
      json: json
    });
  },

  receiveCreatedContact(json, errors) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_CONTACT,
      json: json,
      errors: errors
    });
  },

  receiveServices(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SERVICES,
      json: json
    });
  },

  receiveService(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SERVICE,
      json: json
    });
  },

  receiveGlobals(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_GLOBALS,
      json: json
    });
  },

  receiveServicesPage(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SERVICES_PAGE,
      json: json
    });
  },

  receiveAboutPage(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_ABOUT_PAGE,
      json: json
    });
  },

  receiveFacility(json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_FACILITY,
      json: json
    });
  }

}
