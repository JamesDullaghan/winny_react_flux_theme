import React       from 'react';
import ContactForm from './contact/contact_form';
import GoogleMap   from './index/google_map';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-8 small-centered columns text-center">
            <h2 className="title">
              Contact Us
            </h2>
            <p>We would love to hear from you.</p>
          </div>
        </div>
        <div className="row">
          <div className="medium-7 small-12 columns">
            <ContactForm/>
          </div>
          <div className="medium-5 small-12 columns">
            <div className="row">
              <div className="small-12 columns">
                <div className="map-panel">
                  <h4>Map</h4>
                  <GoogleMap facility={this.props.facility} />
                  <h4>Contact Information</h4>
                  <AddressCard facility={this.props.facility}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class AddressCard extends React.Component {
  render() {
    return (
      <ul className="vcard">
        <li className="fn">{this.props.facility.name}</li>
        <li className="street-address">
          {this.props.facility.address}
        </li>
        <li className="locality">
          {this.props.facility.city}
        </li>
        <li>
          <span className="state">
            {this.props.facility.state}
          </span>, <span className="zip">
            {this.props.facility.zip}
          </span>
        </li>
        <li className="email">
          <a href={"mailto:" + this.props.facility.email}>
            {this.props.facility.email}
          </a>
        </li>
      </ul>
    )
  }
}

export default Contact;
