import Store         from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _services = [];
let _service = {
  id: '',
  name: '',
  description: '',
  short_description: '',
  price: ''
}
let _errors = [];

class ServiceStore extends Store {
  constructor() {
    super();
  }

  getAllServices() {
    return _services;
  }

  getService() {
    return _service;
  }

  getErrors() {
    return _errors;
  }
}

let serviceStoreInstance = new ServiceStore();

serviceStoreInstance.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_SERVICES:
      if (action.json) {
        _services = action.json.services;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

    case ActionTypes.RECEIVE_SERVICE:
      if (action.json) {
        _service = action.json.service;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

    default:
      return;
  }

  serviceStoreInstance.emitChange();

});

export default serviceStoreInstance;
