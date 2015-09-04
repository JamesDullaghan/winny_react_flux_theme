import Store         from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _servicesPage = {
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
  getServicesPage() {
    return _servicesPage;
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
        _servicesPage = action.json.services;
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
