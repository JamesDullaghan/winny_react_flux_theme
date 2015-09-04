import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  loadPosts() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_POSTS
    });

    WebAPIUtils.loadPosts();
  },

  loadPost(postId) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_POST,
      postId: postId
    });

    WebAPIUtils.loadPost(postId);
  }
}
