var React = require('react');

var WebAPIUtils = require('../../utils/WebAPIUtils');
var PostStore = require('../../stores/PostStore');
var PostActionCreators = require('../../actions/PostActionCreators');

var State = require('react-router').State;

var PostPage = React.createClass({

  mixins: [ State ],

  getInitialState: function () {
    return {
      post: PostStore.getPost(),
      errors: []
    };
  },

  componentDidMount: function () {
    PostStore.addChangeListener(this._onChange);
    PostActionCreators.loadPost(this.getParams().postId);
  },

  componentWillUnmount: function () {
    PostStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      post: PostStore.getPost(),
      errors: PostStore.getErrors()
    });
  },

  renderPostBody: function () {
    return {__html: this.state.post.body}
  },

  render: function () {
    return (
      <div>
        <img src={this.state.post.featured_image_main_url} alt={this.state.post.title + " Image"}/>
        <div className="post-page row">
          <div className="small-12 columns">
            <h2 className="title">{this.state.post.title}</h2>
            <span className="meta">{this.state.post.published_date} by {this.state.post.author}</span>
            <p dangerouslySetInnerHTML={this.renderPostBody()}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PostPage;
