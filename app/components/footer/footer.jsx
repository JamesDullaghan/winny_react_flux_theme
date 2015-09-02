var React = require('react');
var FooterLinks = require('./footer_links');

var Footer = React.createClass({

  displayName: 'Footer Component',

  render: function () {
    return (
      <footer>
        <div className="row">
          <div className="large-3 medium-4 small-12 columns">
            <p className="nav-title">Contact Us</p>
            <p>
              {this.props.facility.name}
              <br/>
              {this.props.facility.address}
              <br/>
              {this.props.facility.city + ", " + this.props.facility.state + ", " + this.props.facility.zip}
              <br/>
              <a target="_blank" href={"mailto:" + this.props.facility.email}>
                {this.props.facility.email}
              </a>
              <a href={"tel:" + this.props.facility.phone}>
                {this.props.facility.display_phone}
              </a>
            </p>
          </div>
          <FooterLinks/>
        </div>
      </footer>
    )
  }

});

module.exports = Footer;
