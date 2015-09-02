var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var About = React.createClass({
  displayName: 'About Component',

  getDefaultProps: function() {
    return {
      name: 'Pet Hotel',
      description: 'Lorem ipsum Commodo commodo occaecat in in quis incididunt ullamco deserunt officia aliquip mollit Excepteur ut qui Ut aliquip anim in esse elit nulla aliquip dolore veniam irure veniam adipisicing sint.'
    };
  },

  render: function () {
    return (
      <section className="about">
        <div className="row">
          <div className="small-12 small-centered columns">
            <p className="about-heading">About {this.props.name}</p>
          </div>
          <div className="small-6 small-centered columns">
            <p className="about-text">{this.props.description}</p>
            <Link to="about" className="button-primary">
              Learn More...
            </Link>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = About;
