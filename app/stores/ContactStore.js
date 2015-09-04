import Store         from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _contacts = [];
let _contact = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};
let _errors = [];

let ContactStore = Object.assign(Store, {
  getAllContacts() {
    return _contacts;
  },

  getContact() {
    return _contact;
  },

  getErrors() {
    return _errors;
  }
});

ContactStore.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_CREATED_CONTACT:
      if (action.json) {
        _contacts.unshift(action.json.contacts;)
      }

      if (action.errors) {
        _errors = action.errors;
      }

      ContactStore.emitChange();

    default:
      return;
  }
});

export default ContactStore;
