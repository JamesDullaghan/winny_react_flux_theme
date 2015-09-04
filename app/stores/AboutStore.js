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
};

let _errors = [];

let AboutStore = Object.assign(Store, {
  getPage() {
    return _page;
  },

  getErrors() {
    return _errors;
  }
});

AboutStore.dispatchToken = AppDispatcher.register(payload => {
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

      AboutStore.emitChange();

    default:
      return;
  }

});

export default AboutStore;
