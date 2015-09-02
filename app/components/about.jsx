var React = require('react');

var WebAPIUtils = require('../utils/WebAPIUtils');
var TeamStore = require('../stores/TeamStore');
var TeamActionCreators = require('../actions/TeamActionCreators');

var AboutStore = require('../stores/AboutStore');
var AboutActionCreators = require('../actions/AboutActionCreators');

var TeamList = require('../components/team/team_list');
var AboutList = require('../components/about/about_list');

var About = React.createClass({
  displayName: 'About Page Component',

  getInitialState: function () {
    return {
      team: TeamStore.getTeam(),
      page: AboutStore.getPage(),
      errors: []
    };
  },

  componentDidMount: function () {
    AboutStore.addChangeListener(this._onChange);
    AboutActionCreators.loadAboutPage('about');
    TeamStore.addChangeListener(this._onChange);
    TeamActionCreators.loadTeam();
  },

  componentWillUnmount: function () {
    AboutStore.removeChangeListener(this._onChange);
    TeamStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      page: AboutStore.getPage(),
      team: TeamStore.getTeam(),
      errors: TeamStore.getErrors()
    });
  },

  render: function () {
    return (
      <div>
        <AboutList sections={this.state.page.sections}/>
        <TeamList team={this.state.team}/>
      </div>
    )
  }
});

module.exports = About;
