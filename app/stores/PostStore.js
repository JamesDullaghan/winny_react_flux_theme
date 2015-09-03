import Store         from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/AppConstants';
import WebAPIUtils   from '../utils/WebAPIUtils';

let _posts = [];
let _errors = [];
let _post = {
  id: '',
  author: '',
  title: '',
  published_date: '',
  body: '',
  display_body: '',
  meta_keywords: '',
  meta_description: '',
  short_body: '',
  slug: '',
  featured_image_main_url: '',
  featured_image_list_url: '',
  featured_image_thumb_url: ''
}

class PostStore extends Store {
  constructor() {
    super();
  }

  getAllPosts() {
    return _posts;
  }

  getPost() {
    return _post;
  }

  getErrors() {
    return _errors;
  }
}

let postStoreInstance = new PostStore();

postStoreInstance.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_POSTS:
      if (action.json) {
        _posts = action.json.posts;
      }

    case ActionTypes.RECEIVE_POST:
      if (action.json) {
        _post = action.json.post;
        _errors = [];
      }

      if (action.errors) {
        _errors = action.errors;
      }

    default:
      return;
  }

  postStoreInstance.emitChange();
});

export default postStoreInstance;
