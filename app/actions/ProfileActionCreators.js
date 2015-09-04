import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadProfile() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_PROFILE
    });

    WebAPIUtils.loadProfile();
  }
}
