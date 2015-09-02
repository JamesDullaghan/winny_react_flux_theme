var React = require('react');
var Cta = require('./index/cta');
var Icons = require('./index/icons');
var About = require('./index/about');
var Value = require('./index/value');
var SecondaryCta = require('./index/secondary_cta');
var Testimonials = require('./index/testimonials');
var Social = require('./index/social');
var GoogleMap = require('./index/google_map');

var GlobalStore = require('../stores/GlobalStore');
var GlobalActionCreators = require('../actions/GlobalActionCreators');

var $ = require('jquery');

// @todo Add props!!!!
var Index = React.createClass({
  displayName: 'Index Component',

  getInitialState: function () {
    return {
      globals: GlobalStore.getGlobals(),
      errors: []
    };
  },

  componentWillMount: function () {
    $('body').addClass('home-page');
  },

  componentDidMount: function () {
    GlobalStore.addChangeListener(this._onChange);
    GlobalActionCreators.loadGlobals();
  },

  componentWillUnmount: function () {
    $('body').removeClass('home-page');
    GlobalStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      globals: GlobalStore.getGlobals(),
      errors: GlobalStore.getErrors()
    });
  },

  render: function () {
    console.log(this.props.facility);
    return (
      <div>
        <Cta facility={this.props.facility}/>
        <Icons
          city={this.props.facility.city}
          category={this.props.facility.category}>
        </Icons>
        <About

          name={this.props.facility.name}
          description={this.props.facility.description}>
        </About>
        <Value points={this.state.globals.points}/>
        <SecondaryCta
          cta={this.state.globals.cta}/>
        <Testimonials testimonials={this.state.globals.testimonials} />
        <Social profile={this.state.globals.profile}/>
      </div>
    );
  }
});

module.exports = Index;
