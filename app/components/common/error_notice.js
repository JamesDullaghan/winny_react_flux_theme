import React from 'react';

class ErrorNotice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="alert-box alert radius">
        <ul className="no-bullet">
          {this.props.errors.map(function(error, index) {
            return <li key={"error-"+index}>{error}</li>
          })}
        </ul>
        <a className="close">&times;</a>
      </div>
    )
  }
}

export default ErrorNotice;
