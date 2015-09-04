import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadAboutPage(pageName) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_ABOUT_PAGE,
      pageName: pageName
    });

    WebAPIUtils.loadPage(pageName);
  }
}
