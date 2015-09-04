import React         from 'react';
// API Utils
import WebAPIUtils   from '../utils/WebAPIUtils';
// Stores
import ServicesStore from '../stores/ServicesStore';
import ServiceStore  from '../stores/ServiceStore';
// Actions
import ServicesActionCreators from '../actions/ServicesActionCreators';
import ServiceActionCreators  from '../actions/ServiceActionCreators';
// Components
import ErrorNotice from '../components/common/error_notice';
import SectionList from '../components/services/section_list';
import ServiceList from '../components/services/service_list';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      page: ServicesStore.getServicesPage(),
      services: ServiceStore.getAllServices(),
      errors: []
    };
  }

  componentDidMount() {
    ServicesStore.addChangeListener(this._onChange);
    ServicesActionCreators.loadServicesPage('services');
    ServiceStore.addChangeListener(this._onChange);
    ServiceActionCreators.loadServices();
  }

  componentWillUnmount() {
    ServicesStore.removeChangeListener(this._onChange);
    ServiceStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      page: ServicesStore.getServicesPage(),
      services: ServiceStore.getAllServices(),
      errors: ServiceStore.getErrors()
    });
  }

  render() {
    let sections = this.state.page.sections;
    let services = this.state.services;
    return (
      <div>
        <SectionList serviceSections={sections}/>
        <ServiceList services={services}/>
      </div>
    )
  }
}

export default Services;
