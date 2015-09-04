import React      from 'react';
import { Link }   from 'react-router';
import Navigation from './navigation';

class Header extends React.Component {
  constuctor(props) {
    super(props);
  }

  render() {
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
}

export default Header;
