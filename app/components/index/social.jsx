var React = require('react');

var Social = React.createClass({
  displayName: 'Social Component',

  getDefaultProps: function () {
    return {
      profile: {
        twitter_url: 'https://twitter.com/winnyio',
        facebook_url: 'https://facebook.com/winnyio',
        googleplus_url: 'https://plus.google.com/b/109183227221372457177/109183227221372457177/posts',
        youtube_url: 'http://youtube.com/',
        instagram_url: 'http://instagram.com',
        linkedin_url: 'http://linkedin.com',
        yelp_url: 'http://yelp.com',
        pinterest_url: 'http://pinterest.com'
      }
    }
  },

  render: function () {
    return (
      <section className="social">
        <div className="row">
          <div className="small-12 small-centered columns">
            <SocialLink url={this.props.profile.twitter_url} iconClass="fa-twitter-square"/>
            <SocialLink url={this.props.profile.facebook_url} iconClass="fa-facebook-square"/>
            <SocialLink url={this.props.profile.googleplus_url} iconClass="fa-google-plus-square"/>
            <SocialLink url={this.props.profile.youtube_url} iconClass="fa-youtube-square"/>
            <SocialLink url={this.props.profile.instagram_url} iconClass="fa-instagram"/>
            <SocialLink url={this.props.profile.linkedin_url} iconClass="fa-linkedin-square"/>
            <SocialLink url={this.props.profile.pinterest_url} iconClass="fa-pinterest-square"/>
            <SocialLink url={this.props.profile.yelp_url} iconClass="fa-yelp"/>
          </div>
        </div>
      </section>
    )
  }

});

var SocialLink = React.createClass({
  displayName: 'Social Link Component',

  render: function () {
    return (
      <a href={this.props.url}>
        {this.props.url.length >= 1 ? <i className={"fa " + this.props.iconClass}></i> : ''}
      </a>
    )
  }
});

module.exports = Social;
