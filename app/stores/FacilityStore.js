var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppConstants = require('../constants/AppConstants');

var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _facility = {
  id: "",
  name: "",
  description: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  full_street_address: "",
  latitude: "",
  longitude: "",
  created_at: "",
  updated_at: ""
}

var _errors = [];

var FacilityStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getFacility: function () {
    return _facility;
  },

  getErrors: function () {
    return _errors;
  }
});

FacilityStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_FACILITY:
      if (action.json) {
        _facility = action.json.facility;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      FacilityStore.emitChange();
      break;
  }

  return true;
});

module.exports = FacilityStore;
