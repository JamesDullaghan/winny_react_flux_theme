import React    from 'react';
import { Link } from 'react-router';

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let iconClass = `fa ${this.props.iconClass}`;
    let text = this.props.text;
    return(
      <div className="large-4 medium-4 small-12 columns">
        <Link to="services">
          <i className={iconClass}></i>
          <p className="lead">{text}</p>
        </Link>
      </div>
    )
  }
}

export default Icon;
