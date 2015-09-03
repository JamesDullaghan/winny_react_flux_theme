import React from 'react';
// Stores
import TeamStore  from '../stores/TeamStore';
import AboutStore from '../stores/AboutStore';
// Actions
import TeamActionCreators  from '../actions/TeamActionCreators';
import AboutActionCreators from '../actions/AboutActionCreators';
// Components
import TeamList  from '../components/team/team_list';
import AboutList from '../components/about/about_list';

class About extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      team: TeamStore.getTeam(),
      page: AboutStore.getPage(),
      errors: []
    };
  }

  componentDidMount() {
    AboutStore.addChangeListener(this._onChange);
    TeamStore.addChangeListener(this._onChange);
    AboutActionCreators.loadAboutPage('about');
    TeamActionCreators.loadTeam();
  }

  componentWillUnmount() {
    AboutStore.removeChangeListener(this._onChange);
    TeamStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      page: AboutStore.getPage(),
      team: TeamStore.getTeam(),
      errors: TeamStore.getErrors()
    });
  }

  render() {
    let sections = this.state.page.sections;
    let team = this.state.team;

    return (
      <div>
        <AboutList sections={sections}/>
        <TeamList team={team}/>
      </div>
    )
  }
}

export default About;
