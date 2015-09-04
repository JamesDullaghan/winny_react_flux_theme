import Store         from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _page = {
  name: '',
  sections: [
    {
      title: '',
      content: ''
    }
  ]
}
let _errors = [];

let ServicesStore = Object.assign(Store, {
  getPage() {
    return _page;
  },

  getErrors() {
    return _errors;
  }
});

ServicesStore.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_SERVICES_PAGE:
      if (action.json) {
        _page = action.json.services;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

      ServicesStore.emitChange();

    default:
      return;
  }
});

export default ServicesStore;
