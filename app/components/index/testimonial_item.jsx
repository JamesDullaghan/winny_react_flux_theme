var React = require('react');

var TestimonialItem = React.createClass({
  displayName: 'Testimonial Item',

  render: function () {
    return (
      <div className="medium-6 columns">
        <img src={this.props.testimonial.avatar_url} alt={this.props.testimonial.author + " testimonial"} className="left" height="100" width="100" />
        <p className="testimonial-text">{this.props.testimonial.content}</p>
        <p className="testimonial-author">{this.props.testimonial.author}</p>
      </div>
    );
  }
});

module.exports = TestimonialItem;
