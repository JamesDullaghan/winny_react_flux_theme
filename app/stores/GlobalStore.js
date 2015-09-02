var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _errors = [];
var _globals = {
}

var GlobalStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getGlobals: function () {
    return _globals;
  },

  getErrors: function () {
    return _errors;
  }
});

GlobalStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_GLOBALS:
      if (action.json) {
        _globals = action.json.globals;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }
      GlobalStore.emitChange();
      break;
  }

  return true;
});

module.exports = GlobalStore;
