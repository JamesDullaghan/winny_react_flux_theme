var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils');
var PostStore = require('../../stores/PostStore');
var ErrorNotice = require('../../components/common/error_notice');

var PostActionCreators = require('../../actions/PostActionCreators');

var Router = require('react-router');
var Link = Router.Link;

var PostsPage = React.createClass({
  getInitialState: function () {
    return {
      posts: PostStore.getAllPosts(),
      errors: []
    };
  },

  componentDidMount: function () {
    PostStore.addChangeListener(this._onChange);
    PostActionCreators.loadPosts();
  },

  componentWillUnmount: function () {
    PostStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      posts: PostStore.getAllPosts(),
      errors: PostStore.getErrors()
    });
  },

  render: function () {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <section className="row">
        {errors}
        <div id="blog-masonry">
          <PostsList posts={this.state.posts} />
        </div>
      </section>
    )
  }
});

var PostItem = React.createClass({
  renderPostBody: function () {
    return {__html: this.props.post.short_body}
  },

  render: function () {
    return (
      <li>
        <div className="post-panel">
          <Link to="post" params={{postId: this.props.post.id}}>
            <img src={this.props.post.featured_image_list_url} alt={this.props.post.title} />
            <h4 className="title">{this.props.post.title}</h4>
          </Link>
          <div className="post-body"><p dangerouslySetInnerHTML={this.renderPostBody()}></p></div>

          <span className="meta">{this.props.post.published_date} by {this.props.post.author}</span>
          <Link to="post" params={{postId: this.props.post.id}} className="button small primary expand">
            Read More
          </Link>
        </div>
      </li>
    )
  }
});

var PostsList = React.createClass({
  render: function () {
    return (
      <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-2">
        {this.props.posts.map(function(post, index) {
          return <PostItem post={post} key={"post-" + index}/>
        })}
      </ul>
    );
  }
});

module.exports = PostsPage;
