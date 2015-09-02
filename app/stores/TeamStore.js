import Store         from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _team = [];
let _errors = [];

class TeamStore extends Store {
  constructor() {
    super();
  }

  getTeam() {
    return _team;
  }

  getErrors() {
    return _errors;
  }
}

let teamStoreInstance = new TeamStore();

teamStoreInstance.dispatchToken = AppDispatcher.register(payload => {
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

    default:
      return;
  }

  teamStoreInstance.emitChange();
});

export default teamStoreInstance;
