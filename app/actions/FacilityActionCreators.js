import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadFacility() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_FACILITY,
    });

    WebAPIUtils.loadFacility();
  }
}
