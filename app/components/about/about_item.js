import React from 'react';

class AboutItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return {__html: this.props.section.content}
  }

  render() {
    let title = this.props.section.title;
    let content = this.renderContent();
    return (
      <div className="row">
        <div className="small-12 columns text-center">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={content}/>
        </div>
      </div>
    )
  }
}

export default AboutItem;
