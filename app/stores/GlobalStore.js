import Store         from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _globals = [];
let _errors = [];

class GlobalStore extends Store {
  constructor() {
    super();
  }

  getGlobals() {
    return _globals;
  }

  getErrors() {
    return _errors;
  }
}

let globalStoreInstance.dispatchToken = AppDispatcher.register(payload => {
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

    default:
      return;
  }

  globalStoreInstance.emitChange();
});

export default globalStoreInstance;
