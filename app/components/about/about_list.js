import React     from 'react';
import AboutItem from './about_item';

class AboutList extends React.Component {
  render() {
    let sectionNodes = this.props.sections.map((section, index) => {
      return <AboutItem section={section} key={"section-"+ index}/>
    });
    return (
      <div>
        {sectionNodes}
      </div>
    )
  }
}

export default AboutList;
