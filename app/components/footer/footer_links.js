import React  from 'react';
import Router from 'react-router';

let Link = Router.Link;

class FooterLinks extends React.Component {
  constuctor(props) {
    super(props);
  }

  render() {
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
}

export default FooterLinks;
