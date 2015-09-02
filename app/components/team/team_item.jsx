var React = require('react');

var TeamIcon = require('./team_icon');

var TeamItem = React.createClass({
  displayName: 'Team Member Component',

  render: function () {
    return (
      <li>
        <img src={this.props.member.image_main_url} alt={this.props.member.full_name + " Team Image"}/>
        <div className="team-panel">
          <ul className="social-icons icon-circle list-unstyled list-inline">
            <TeamIcon url={this.props.member.linkedin_url} icon="fa-linkedin" />
            <TeamIcon url={this.props.member.twitter_url} icon="fa-twitter" />
            <TeamIcon url={this.props.member.facebook_u} icon="fa-facebook" />
          </ul>
          <h4>{this.props.member.full_name}</h4>
          <p>{this.props.member.job_title}</p>
        </div>
      </li>
    )
  }
});

module.exports = TeamItem;
