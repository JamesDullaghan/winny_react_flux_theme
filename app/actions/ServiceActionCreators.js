import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadServices() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_SERVICES
    });

    WebAPIUtils.loadServices();
  },

  loadService(serviceId) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_SERVICE,
      serviceId: serviceId
    });

    WebAPIUtils.loadService(serviceId);
  }
}
