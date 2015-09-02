var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SecondaryCta = React.createClass({
  getDefaultProps: function () {
    return {
      cta: {
        title: 'Comfort Without Compromise',
        description: 'Our suites are all designed to provide the most comfortable experience for your family members. We take great pride in providing all inclusive amenities and personlized service each day. Give us a try and see what living the pet hotel style is all about.',
        button_text: 'Schedule a tour!'
      }
    };
  },
  render: function () {
    return (
      <section className="secondary-cta">
        <div className="row">
          <div className="small-12 small-centered columns">
            <p className="cta-heading">
              {this.props.cta.title}
            </p>

            <p>{this.props.cta.description}</p>
          </div>
        </div>

        <div className="row">
          <div className="small-6 small-centered columns">
            <Link to="contact" className="button">
              {this.props.cta.button_text}
            </Link>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = SecondaryCta;
