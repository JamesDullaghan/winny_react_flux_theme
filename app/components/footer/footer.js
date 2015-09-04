import React from 'react';
import FooterLinks from './footer_links';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.cityState = this.cityState.bind(this);
  }

  cityState() {
    return `${this.props.facility.city}, ${this.props.facility.state}, ${this.props.facility.zip}`;
  }

  render() {
    let name = this.props.facility.name;
    let address = this.props.facility.address;
    let cityState = this.cityState();
    let email = this.props.facility.email;
    let phone = this.props.facility.phone;
    let displayPhone = this.props.facility.display_phone;
    return (
      <footer>
        <div className="row">
          <div className="large-3 medium-4 small-12 columns">
            <p className="nav-title">Contact Us</p>
            <p>
              {name}
              <br/>
              {address}
              <br/>
              {cityState}
              <br/>
              <a target="_blank" href={"mailto:" + email}>
                {email}
              </a>
              <a href={"tel:" + phone}>
                {display_phone}
              </a>
            </p>
          </div>
          <FooterLinks/>
        </div>
      </footer>
    )
  }
}

export default Footer;
