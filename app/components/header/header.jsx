var React = require('react');
var Router = require('react-router');
var Navigation = require('./navigation');
var Link = Router.Link;

var Header = React.createClass({
  displayName: "Header Component",

  render: function () {
    return (
      <nav className="top-bar" data-topbar>
        <ul className="title-area">
          <li className="name">
            <h1>
              <Link to="app">{this.props.facility.name}</Link>
            </h1>
          </li>
          <li className="toggle-topbar menu-icon">
            <a href="#">
              <span></span>
            </a>
          </li>
        </ul>
        <Navigation/>
      </nav>
    )
  }
});

module.exports = Header;
