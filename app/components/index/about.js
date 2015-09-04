import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  render() {
    let name = this.props.name;
    let description = this.props.description;
    return (
      <section className="about">
        <div className="row">
          <div className="small-12 small-centered columns">
            <p className="about-heading">About {name}</p>
          </div>
          <div className="small-6 small-centered columns">
            <p className="about-text">{description}</p>
            <Link to="about" className="button-primary">
              Learn More...
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
