import Store         from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _globals = [];
let _errors = [];

let GlobalStore = Object.assign(Store, {
  getGlobals() {
    return _globals;
  },

  getErrors() {
    return _errors;
  }
});

GlobalStore.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_GLOBALS:
      if (action.json) {
        _globals = action.json.globals;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

      GlobalStore.emitChange();

    default:
      return;
  }


});

export default GlobalStore;
