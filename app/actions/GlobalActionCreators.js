import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadGlobals() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_GLOBALS
    });

    WebAPIUtils.loadGlobals();
  }
}
