import AppConstants   from '../constants/AppConstants';
import { Dispatcher } from 'flux';

const PayloadSources = AppConstants.PayloadSources;

let AppDispatcher = Object.assign(new Dispatcher(), {
  handleServerAction(action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    }

    this.dispatch(payload);
  },

  handleViewAction(action) {
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    }

    this.dispatch(payload);
  }
});

export default AppDispatcher;
