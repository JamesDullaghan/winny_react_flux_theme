import React    from 'react';
import { Link } from 'react-router';

class SecondaryCta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title       = this.props.cta.title;
    let description = this.props.cta.description;
    let buttonText  = this.props.cta.button_text;
    return (
      <section className="secondary-cta">
        <div className="row">
          <div className="small-12 small-centered columns">
            <p className="cta-heading">{title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="small-6 small-centered columns">
            <Link to="contact" className="button">{buttonText}</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default SecondaryCta;
