var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  loadFacility: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_FACILITY,
    });
    WebAPIUtils.loadFacility();
  }
}
