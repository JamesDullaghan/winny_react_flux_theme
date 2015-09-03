import Store         from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

const CHANGE_EVENT = 'change';

let _team = [];
let _errors = [];

let TeamStore = Object.assign(Store, {
  getTeam() {
    return _team;
  },

  getErrors() {
    return _errors;
  }
});

TeamStore.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_TEAM:
      if (action.json) {
        _team = action.json.team;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

      TeamStore.emitChange();

    default:
      return;
  }
});

export default TeamStore;
