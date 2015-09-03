import Store         from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _facility = {
  id: '',
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  full_street_address: '',
  latitude: '',
  longitude: '',
  created_at: '',
  updated_at: ''
};

let _errors = [];

let FacilityStore = Object.assign(Store, {
  getFacility() {
    return _facility;
  },

  getErrors() {
    return _errors;
  }
});

FacilityStore.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_FACILITY:
      if (action.json) {
        _facility = action.json.facility;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

      FacilityStore.emitChange();

    default:
      return;
  }
});

export default FacilityStore;
