var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var FooterLinks = React.createClass({
  displayName: 'Footer Links Component',

  render: function () {
    return (
      <div className="large-3 medium-4 small-12 columns end">
        <p className="nav-title">Quicklinks</p>
        <Link to="app">Home</Link>
        <Link to="about">About</Link>
        <Link to="services">Services</Link>
        <Link to="posts">Posts</Link>
        <Link to="contact">Contact</Link>
      </div>
    )
  }
});

module.exports = FooterLinks;
