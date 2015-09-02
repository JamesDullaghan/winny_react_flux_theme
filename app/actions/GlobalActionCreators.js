var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  loadGlobals: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_GLOBALS
    });

    WebAPIUtils.loadGlobals();
  }
}
