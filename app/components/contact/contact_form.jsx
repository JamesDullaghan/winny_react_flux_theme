var React = require('react');
var AppDispatcher = require('../../dispatcher/AppDispatcher');
var AppConstants = require('../../constants/AppConstants');
var WebAPIUtils = require('../../utils/WebAPIUtils');
var ContactActionCreators = require('../../actions/ContactActionCreators');

var ErrorNotice = require('../../components/common/error_notice');

var ContactForm = React.createClass({
  displayName: 'Contact Form',
  getInitialState: function() {
    return {
      errors: ''
    };
  },

  getValue: function (refName) {
    return this.refs[refName].getDOMNode().value;
  },

  _onBlur: function(e){
    console.log(e.target.name);
    var value = this.getValue(e.target.name);
    var error;
    if (!value)
      error = e.target.name + ' is required';
    else if (value.length < 1)
      error = 'Please provide more information.';
    // var errors = this.state.errors;
    // console.log(errors);
    this.setState({ errors: [error] });
  },

  _onSubmit: function (e) {
    e.preventDefault();
    var name = this.getValue('fullName');
    var email = this.getValue('email');
    var phone = this.getValue('phone');
    var subject = this.getValue('subject');
    var message = this.getValue('message');
    ContactActionCreators.createContact(name, email, phone, subject, message);
  },

  _onChange: function () {
    this.setState({
      email: this.refs.email.getDOMNode().value,
      fullName: this.refs.fullName.getDOMNode().value,
      phone: this.refs.phone.getDOMNode().value,
      subject: this.refs.subject.getDOMNode().value,
      message: this.refs.message.getDOMNode().value
    });
  },

  render: function () {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <form className="contact-form" onSubmit={this._onSubmit}>
        {errors}
        <div className="row">
          <div className="small-6 columns">
            <label
              htmlFor="fullName"
              className="sr-only">
              Your Name
            </label>
            <input
              onChange={this._onChange}
              onBlur={this._onBlur}
              ref="fullName"
              id="fullName"
              className="form-control"
              type="text"
              minlength="2"
              name="fullName"
              placeholder="Your name"
              required />
          </div>
          <div className="small-6 columns">
            <label
              htmlFor="email"
              className="sr-only">
              Email address
            </label>
            <input
              onChange={this._onChange}
              onBlur={this._onBlur}
              id="email"
              ref="email"
              type="email"
              name="email"
              placeholder="Your email address"
              required />
          </div>
        </div>

        <div className="row">
          <div className="medium-6 columns">
            <label
              htmlFor="phone"
              className="sr-only">
              Phone
            </label>
            <input
              onBlur={this._onBlur}
              onChange={this._onChange}
              id="phone"
              ref="phone"
              type="text"
              placeholder="Your phone number"
              required />
          </div>
          <div className="medium-6 columns">
            <label
              htmlFor="subject"
              className="sr-only">
              Subject
            </label>
            <select
              onChange={this._onChange}
              onBlur={this._onBlur}
              id="subject"
              ref="subject"
              className="form-control"
              required>
              <option value="contact">Feedback</option>
              <option value="booking">Booking Information</option>
              <option value="information">Question/Concern</option>
            </select>
          </div>
        </div>
        <label
          htmlFor="message"
          className="sr-only">
          Your message
        </label>
        <textarea
          onChange={this._onChange}
          onBlur={this._onBlur}
          ref="message"
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          rows="12">
        </textarea>
        <button className="button small primary expand" type="submit">Send Message</button>
        <div className="panel">
          <div className="row">
            <div className="small-12 columns">
              <h2 className="text-center">Message Preview</h2>
              <p>
                <b>Full Name: </b>
                {this.state.fullName}
              </p>
              <p>
                <b>Email: </b>
                {this.state.email}
              </p>
              <p>
                <b>Phone: </b>
                {this.state.phone}
              </p>
              <p>
                <b>Subject: </b>
                {this.state.subject}
              </p>
              <p>
                <b>Message: </b>
                {this.state.message}
              </p>
            </div>
          </div>
        </div>
      </form>
    )
  }

});

module.exports = ContactForm;
