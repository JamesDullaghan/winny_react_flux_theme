import AppConstants from '../constants/AppConstants';
import Dispatcher from 'flux';

const PayloadSources = AppConstants.PayloadSources;

class AppDispatcher extends Dispatcher {
  constructor() {
    super();
  }

  handleServerAction(action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    }

    this.dispatch(payload);
  }

  handleViewAction(action) {
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    }

    this.dispatch(payload);
  }
}

export default AppDispatcher;

// var AppConstants = require('../constants/AppConstants.js');
// var Dispatcher = require('flux').Dispatcher;
// var assign = require('object-assign');

// var PayloadSources = AppConstants.PayloadSources;

// var AppDispatcher = assign(new Dispatcher(), {

//   handleServerAction: function (action) {
//     var payload = {
//       source: PayloadSources.SERVER_ACTION,
//       action: action
//     };
//     this.dispatch(payload);
//   },

//   handleViewAction: function (action) {
//     var payload = {
//       source: PayloadSources.VIEW_ACTION,
//       action: action
//     };
//     this.dispatch(payload);
//   }
// });

// module.exports = AppDispatcher;
