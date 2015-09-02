var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Icon = React.createClass({
  displayName: 'Icon Component',

  render: function () {
    var iconClass = "fa " + this.props.iconClass;
    return (
      <div className="large-4 medium-4 small-12 columns">
        <Link to="services">
          <i className={iconClass}></i>
          <p className="lead">{this.props.text}</p>
        </Link>
      </div>
    )
  }
});

module.exports = Icon;
