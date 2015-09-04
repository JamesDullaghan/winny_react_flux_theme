import Store         from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _profile = {
  id: '',
  twitter_url: '',
  facebook_url: '',
  pinterest_url: '',
  linkedin_url: '',
  googleplus_url: '',
  yelp_url: '',
  meta_keywords: '',
  meta_description: ''
}
let _errors = [];

let ProfileStore = Object.assign(Store, {
  getProfile() {
    return _profile;
  },

  getErrors() {
    return _errors;
  }
});

ProfileStore.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_PROFILE:
      if (action.json) {
        _profile = action.json.profile;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

      ProfileStore.emitChange();

    default:
      return;
  }
});

export default ProfileStore;
