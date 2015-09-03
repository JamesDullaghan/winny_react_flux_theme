import Store         from './Store';
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

class FacilityStore extends Store {
  constructor() {
    super();
  }

  getFacility() {
    return _facility;
  }

  getErrors() {
    return _errors;
  }
}

let facilityStoreInstance = new FacilityStore();

facilityStoreInstance.dispatchToken = AppDispatcher.register(payload => {
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

    default:
      return;
  }

  FacilityStore.emitChange();
});

export default facilityStoreInstance;
