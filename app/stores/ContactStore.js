import Store         from './Store';
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

class ContactStore extends Store {
  constuctor() {
    super();
  }

  getAllContacts() {
    return _contacts;
  }

  getContact() {
    return _contact;
  }

  getErrors() {
    return _errors;
  }
}

let contactStoreInstance = new ContactStore();

contactStoreInstance.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_CREATED_CONTACT:
      if (action.json) {
        _contacts.unshift(action.json.contacts;)
      }

      if (action.errors) {
        _errors = action.errors;
      }

    default:
      return;
  }

  contactStoreInstance.emitChange();
});

export default contactStoreInstance;
