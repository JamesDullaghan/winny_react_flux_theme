var React = require('react');

var TeamItem = require('./team_item');

var TeamList = React.createClass({
  displayName: 'List of Team Members',

  render: function () {
    return (
      <div className="team-row row">
        <h3 className="title">Meet The Team</h3>
        <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-2">
          {this.props.team.map(function(member, index) {
            return <TeamItem member={member} key={"member-" + index}/>
          })}
        </ul>
      </div>
    )
  }
});

module.exports = TeamList;
