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
};

let _errors = [];

class AboutStore extends Store {
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

let aboutStoreInstance = new AboutStore();

aboutStoreInstance.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_ABOUT_PAGE:
      if (action.json) {
        _page = action.json.about;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

    default:
      return;
  }

  aboutStoreInstance.emitChange();

});

export default aboutStoreInstance;
