import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadServicesPage(pageName) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_SERVICES_PAGE,
      pageName: pageName
    });

    WebAPIUtils.loadPage(pageName);
  }
}
