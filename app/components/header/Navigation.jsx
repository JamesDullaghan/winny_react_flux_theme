var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var State = Router.State;

var Navigation = React.createClass({
  displayName: "Navigation Component",

  render: function () {
    return (
      <section className="top-bar-section">
        <ul className="right">
          <NavItem link="about" name="About"/>
          <NavItem link="services" name="Services"/>
          <NavItem link="posts" name="Blog"/>
          <NavItem link="contact" name="Contact"/>
        </ul>
      </section>
    )
  }
});

var NavItem = React.createClass({
  mixins: [ State ],

  activeLink: function () {
    return (this.getPath().split('/')[1] === this.props.link)
  },

  render: function () {
    var activeClassName = this.activeLink() ? 'active' : '';
    return (
      <li className={activeClassName}>
        <Link to={this.props.link}>{this.props.name}</Link>
      </li>
    )
  }
});

module.exports = Navigation;
