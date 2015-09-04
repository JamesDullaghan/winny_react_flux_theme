import React from 'react';

class Cta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.name;
    let description = this.props.description;
    return (
      <section className="cta">
        <div className="row">
          <div className="small-12 columns">
            <h1>{name}</h1>
            <h4>{description}</h4>
          </div>
        </div>
      </section>
    )
  }
}

export default Cta;
