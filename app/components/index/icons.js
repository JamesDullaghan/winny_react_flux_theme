import React    from 'react';
import { Link } from 'react-router';
import Icon     from './icon';

class Icons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let city     = this.props.city;
    let category = this.props.category;
    return(
      <section className="icons">
        <div className="row">
          <div className="small-12 columns">
            <p className="icon-heading">{city} Premier {category}</p>
          </div>
        </div>
        <div className="row">
          <Icon iconClass="fa-suitcase" text="Boarding" />
          <Icon iconClass="fa-star" text="Daycare" />
          <Icon iconClass="fa-paw" text="Grooming" />
        </div>
      </section>
    )
  }
}

export default Icons;
