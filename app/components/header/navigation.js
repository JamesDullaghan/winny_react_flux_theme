import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
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
}

class NavItem extends React.Component {
  contextTypes: {
    router: React.propTypes.func
  }

  activeLink() {
    let pathname = this.context.router.getCurrentPathname();
    let link = this.props.link;

    return (pathname === link);
  }

  render() {
    var activeClassName = this.activeLink() ? 'active' : '';

    return (
      <li className={activeClassName}>
        <Link to={this.props.link}>{this.props.name}</Link>
      </li>
    )
  }
}

export default Navigation;
