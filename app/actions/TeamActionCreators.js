import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadTeam() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TEAM
    });

    WebAPIUtils.loadTeam();
  }
}
