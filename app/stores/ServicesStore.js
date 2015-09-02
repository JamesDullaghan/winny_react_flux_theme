var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _page = {
  name: "",
  sections: [
    {
      title: "",
      content: ""
    }
  ]
};
var _errors = [];

var ServicesStore = assign({}, EventEmitter.prototype,{
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getPage: function () {
    return _page;
  },

  getErrors: function () {
    return _errors;
  }
});

ServicesStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_SERVICES_PAGE:
      if (action.json) {
        _page = action.json.services;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      ServicesStore.emitChange();
      break;
  }

  return true;
});

module.exports = ServicesStore;
