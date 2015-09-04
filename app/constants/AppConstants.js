import keyMirror from 'keymirror';

const production = true;
const facilityId = 1;
const APIRoot = production ? 'http://api.winny.io' : 'http://localhost:3002'

function _getAPIUrl(resource, id = true) {
  let basePath = `${APIRoot}/v1/${resource}`;

  if (id == false) {
    return basePath;
  }

  return `${basePath}?facility_id=${facilityId}`;
}

export default {
  Settings: {
    production: production,
    facilityId: facilityId,
    APIRoot:    APIRoot
  },

  APIEndpoints: {
    POSTS:    _getAPIUrl('posts'),
    POST:     _getAPIUrl('post', false),
    PROFILE:  _getAPIUrl('profile'),
    TEAM:     _getAPIUrl('team'),
    CONTACTS: _getAPIUrl('contacts'),
    SERVICES: _getAPIUrl('services'),
    SERVICE:  _getAPIUrl('service', false),
    GLOBALS:  _getAPIUrl('globals'),
    PAGE:     _getAPIUrl('pages'),
    FACILITY: _getAPIUrl('facility')
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION:   null
  }),

  ActionTypes: keyMirror({
    LOAD_POSTS:            null,
    RECEIVE_POSTS:         null,
    LOAD_POST:             null,
    RECEIVE_POST:          null,
    LOAD_PROFILE:          null,
    RECEIVE_PROFILE:       null,
    LOAD_TEAM:             null,
    RECEIVE_TEAM:          null,
    CREATE_CONTACT:        null,
    LOAD_SERVICES:         null,
    RECEIVE_SERVICES:      null,
    LOAD_SERVICE:          null,
    RECEIVE_SERVICE:       null,
    LOAD_GLOBALS:          null,
    RECEIVE_GLOBALS:       null,
    RECEIVE_SERVICES_PAGE: null,
    LOAD_SERVICES_PAGE:    null,
    RECEIVE_ABOUT_PAGE:    null,
    LOAD_ABOUT_PAGE:       null,
    RECEIVE_FACILITY:      null,
    LOAD_FACILITY:         null
  })

}
