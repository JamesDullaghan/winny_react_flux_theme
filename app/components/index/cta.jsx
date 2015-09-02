var React = require('react');

var Cta = React.createClass({
  displayName: 'CTA component',

  getDefaultProps: function () {
    return {
      facility: {
        name: 'The Pet Hotel',
        description: 'Boarding | Daycare | Grooming'
      }
    }
  },

  render: function () {
    return (
      <section className="cta">
        <div className="row">
          <div className="small-12 columns">
            <h1>{this.props.facility.name}</h1>
            <h4>{this.props.facility.description}</h4>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = Cta;
