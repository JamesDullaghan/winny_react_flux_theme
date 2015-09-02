var React = require('react');

var ServiceStore = require('../../stores/ServiceStore');
var ServiceActionCreators = require('../../actions/ServiceActionCreators');

var State = require('react-router').State;

var ServicePage = React.createClass({
  displayName: 'Service Page Component',

  mixins: [ State ],

  getInitialState: function () {
    return {
      service: ServiceStore.getService(),
      errors: []
    };
  },

  componentDidMount: function () {
    ServiceStore.addChangeListener(this._onChange);
    ServiceActionCreators.loadService(this.getParams().serviceId);
  },

  componentWillUnmount: function () {
    ServiceStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      service: ServiceStore.getService(),
      errors: ServiceStore.getErrors()
    });
  },

  renderServiceDescription: function () {
    return {__html: this.state.service.description}
  },

  render: function () {
    return (
      <div className="row">
        <div className="small-8 small-centered columns text-center">
          <h3>{this.state.service.name}</h3>
          <img
            src={this.state.service.main_image_url}
            alt={this.state.service.name + " service image"}
            title={this.state.service.name + " service image"} />
          <p dangerouslySetInnerHTML={this.renderServiceDescription()}/>
          <sup>{this.state.service.display_price}</sup>
        </div>
      </div>
    )
  }
});

module.exports = ServicePage;
