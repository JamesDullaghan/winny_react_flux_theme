import Store         from './Store';
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

class ServicesStore extends Store {
  constructor() {
    super();
  }

  getPage() {
    return _page;
  }

  getErrors() {
    return _errors;
  }
}

let servicesStoreInstance = new ServicesStore();

servicesStoreInstance.dispatchToken = AppDispatcher.register(payload => {
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

    default:
      return;
  }

  servicesStoreInstance.emitChange();

});

export default servicesStoreInstance;
