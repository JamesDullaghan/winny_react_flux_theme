var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  loadAboutPage: function (pageName) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_ABOUT_PAGE,
      pageName: pageName
    });

    WebAPIUtils.loadPage(pageName);
  }
}
