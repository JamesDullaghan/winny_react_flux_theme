import React from 'react';
import ReactRouter from 'react-router';
// Styles
import css from '../styles/style.scss';
// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Index from './components/index';
import About from './components/about';
import Contact from './components/contact';
import Posts from './components/posts/posts_page';
import Post from './components/posts/post_page';
import Services from './components/services';
import Service from './components/services/service_page';
// Api Utils
import WebAPIUtils from './utils/WebAPIUtils';
// Stores
import FacilityStore from './stores/FacilityStore';
// Actions
import FacilityActionCreators from './actions/FacilityActionCreators';

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const RouteHandler = ReactRouter.RouteHandler;
const DefaultRoute = ReactRouter.DefaultRoute;

export class App extends React.Component {
  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this);
    this.state = {
      facility: FacilityStore.getFacility(),
      errors: []
    };
  }

  componentDidMount() {
    FacilityStore.addChangeListener(this._onChange);
    FacilityActionCreators.loadFacility();
  }

  componentWillUnmount() {
    FacilityStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      facility: FacilityStore.getFacility(),
      errors: FacilityStore.getErrors()
    });
  }

  render() {
    return (
      <div>
        <Header facility={this.state.facility}/>
        <RouteHandler facility={this.state.facility} {...this.props}/>
        <Footer facility={this.state.facility}/>
      </div>
    )
  }
}

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route
      name="about"
      handler={About}
      activeClassName="active"/>
    <Route
      name="posts"
      handler={Posts}
      activeClassName="active" />
    <Route
      name="post"
      path="/posts/:postId"
      handler={Post}
      activeClassName="active" />
    <Route
      name="contact"
      handler={Contact}
      activeClassName="active" />
    <Route
      name="services"
      handler={Services}
      activeClassName="active"/>
    <Route
      name="service"
      path="/services/:serviceId"
      handler={Service} activeClassName="active"/>
    <DefaultRoute handler={Index}/>
  </Route>
)

ReactRouter.run(routes, function (Handler, state) {
  React.render(<Handler {...state}/>, document.getElementById('content'))
});
