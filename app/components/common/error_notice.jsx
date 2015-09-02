var React = require('react');

var ErrorNotice = React.createClass({
  render: function () {
    return (
      <div className="alert-box alert radius">
        <ul className="no-bullet">
          {this.props.errors.map(function(error, index) {
            return <li key={"error-"+index}>{error}</li>
          })}
        </ul>
        <a className="close">&times;</a>
      </div>
    );
  }
});

module.exports = ErrorNotice;
