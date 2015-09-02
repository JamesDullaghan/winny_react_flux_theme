var React = require('react');
var WebAPIUtils = require('../utils/WebAPIUtils');
var ServiceStore = require('../stores/ServiceStore');
var ServiceActionCreators = require('../actions/ServiceActionCreators');
var ErrorNotice = require('../components/common/error_notice');

var ServicesStore = require('../stores/ServicesStore');
var ServicesActionCreators = require('../actions/ServicesActionCreators');

var ServiceList = require('./services/service_list');
var SectionList = require('./services/section_list');

var Services = React.createClass({
  displayName: 'Services Page',

  getInitialState: function () {
    return {
      page: ServicesStore.getPage(),
      services: ServiceStore.getAllServices(),
      errors: []
    };
  },

  componentDidMount: function () {
    ServicesStore.addChangeListener(this._onChange);
    ServicesActionCreators.loadServicesPage('services');
    ServiceStore.addChangeListener(this._onChange);
    ServiceActionCreators.loadServices();
  },

  componentWillUnmount: function () {
    ServicesStore.removeChangeListener(this._onChange);
    ServiceStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      page: ServicesStore.getPage(),
      services: ServiceStore.getAllServices(),
      errors: ServiceStore.getErrors()
    });
  },

  render: function () {
    return (
      <div>
        <SectionList serviceSections={this.state.page.sections}/>
        <ServiceList services={this.state.services}/>
      </div>
    )
  }
});

module.exports = Services;
