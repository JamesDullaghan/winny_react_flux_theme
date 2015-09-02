var React = require('react');
var TestimonialItem = require('./testimonial_item');

var Testimonials = React.createClass({
  getDefaultProps: function () {
    return {
      testimonials: [
        {
          avatar_url: 'http://placehold.it/100x100/368CDE/ffffff',
          content: 'We absolutely love the pet hotel. The staff has been taking care of Rex for a few years now. Whenever we go on vacation, we make no hesitation to book a stay for Rex. Give them a try, you will love the experience!',
          author: 'Cecil Packard'
        },
        {
          avatar_url: 'http://placehold.it/100x100/368CDE/ffffff',
          content: 'Some testimonial text goes here. You can use any testimonial text you would like. A real testimonial would be best.',
          author: 'Joe Schmoe'
        }
      ]
    }
  },

  render: function () {
    return (
      <section className="testimonials">
        <div className="row">
          <div className="medium-6 small-centered columns">
            <p className="testimonial-title">Customer Testimonial</p>
          </div>
        </div>
        <div className="row">
          {this.props.testimonials.map(function(testimonial, index) {
            return <TestimonialItem testimonial={testimonial} key={"testimonial" + index}/>
          })}
        </div>
      </section>
    )
  }
});

module.exports = Testimonials;
