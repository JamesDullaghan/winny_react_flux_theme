var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Icon = require('./icon');

var Icons = React.createClass({
  displayName: 'Icon Components',

  getDefaultProps: function() {
    return {
      city: 'San Diego',
      category: 'Pet Hotel'
    };
  },

  render: function () {
    return (
      <section className="icons">
        <div className="row">
          <div className="small-12 columns">
            <p className="icon-heading">{this.props.city} Premier {this.props.category}</p>
          </div>
        </div>
        <div className="row">
          <Icon iconClass="fa-suitcase" text="Boarding" />
          <Icon iconClass="fa-star" text="Daycare" />
          <Icon iconClass="fa-paw" text="Grooming" />
        </div>
      </section>
    );
  }
});

module.exports = Icons;
