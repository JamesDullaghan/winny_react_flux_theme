import ServerActionCreators from '../actions/ServerActionCreators';
import AppConstants from '../constants/AppConstants';
import request from 'superagent';

function _getErrors(res) {
  let errorMsgs = ["Something went wrong, please try again"];
  let json = JSON.parse(res.text);
  if (json) {
    if (json['errors']) {
      errorMsgs = json['errors'];
    } else if (json['errors']) {
      errorMsgs = [json['error']];
    }
  }
  return errorMsgs;
}

const APIEndpoints = AppConstants.APIEndpoints;

module.exports = {
  loadPosts: function () {
    // POSTS endpoint requires facilityId
    request.get(APIEndpoints.POSTS)
      .set('Accept', 'application/json')
      // No access token required for public posts
      // .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res) {
        let json = JSON.parse(res.text);
        ServerActionCreators.receivePosts(json);
      });
  },

  loadPost: function (postId) {
    // POST endpoint does not require facilityId
    request.get(APIEndpoints.POST + '/' + postId)
      .set('Accept', 'application/json')
      // No access token required for public post
      // .set('Authorization', sessionStorage.getItem('accessToken))
      .end(function(error, res) {
        if (res) {
          let json = JSON.parse(res.text);
          ServerActionCreators.receivePost(json);
        }
      });
  },

  loadProfile: function () {
    request.get(APIEndpoints.PROFILE)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        let json = JSON.parse(res.text);
        ServerActionCreators.receiveProfile(json);
      });
  },

  loadTeam: function () {
    request.get(APIEndpoints.TEAM)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        let json = JSON.parse(res.text);
        ServerActionCreators.receiveTeam(json);
      });
  },

  createContact: function(name, email, phone, subject, message) {
    request.post(APIEndpoints.CONTACTS)
      .set('Accept', 'application/json')
      .send({ name: name, email: email, phone: phone, subject: subject, message: message })
      .end(function(error, res) {
        if (res) {
          if (res.error) {
            let errorMsgs = _getErrors(res);
            ServerActionCreators.receiveCreatedContact(null, errorMsgs);
          } else {
            let json = JSON.parse(res.text);
            ServerActionCreators.receiveCreatedContact(json, null);
          }
        }
      });
  },

  loadServices: function () {
    // POSTS endpoint requires facilityId
    request.get(APIEndpoints.SERVICES)
      .set('Accept', 'application/json')
      // No access token required for public posts
      // .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res) {
        let json = JSON.parse(res.text);
        ServerActionCreators.receiveServices(json);
      });
  },

  loadService: function (serviceId) {
    // POST endpoint does not require facilityId
    request.get(APIEndpoints.SERVICE + '/' + serviceId)
      .set('Accept', 'application/json')
      // No access token required for public post
      // .set('Authorization', sessionStorage.getItem('accessToken))
      .end(function(error, res) {
        if (res) {
          let json = JSON.parse(res.text);
          ServerActionCreators.receiveService(json);
        }
      });
  },

  loadGlobals: function () {
    request.get(APIEndpoints.GLOBALS)
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          let json = JSON.parse(res.text);
          ServerActionCreators.receiveGlobals(json)
        }
      });
  },

  loadAboutPage: function (pageName) {
    request.get(APIEndpoints.PAGE + '&page_name=' + pageName)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          let json = JSON.parse(res.text);
          ServerActionCreators.receiveAboutPage(json)
        }
      });
  },

  loadServicesPage: function (pageName) {
    request.get(APIEndpoints.PAGE + '&page_name=' + pageName)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          let json = JSON.parse(res.text);
          ServerActionCreators.receiveServicesPage(json)
        }
      });
  },

  loadFacility: function () {
    request.get(APIEndpoints.FACILITY)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          let json = JSON.parse(res.text);
          ServerActionCreators.receiveFacility(json)
        }
      });
  }

};
