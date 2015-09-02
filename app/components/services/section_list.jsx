var React = require('react');
var SectionItem = require('./section_item');

var SectionList = React.createClass({
  displayName: 'Section List Component',

  render: function () {
    return (
      <div>
        {this.props.serviceSections.map(function(section, index){
          return <SectionItem section={section} key={"section-"+ index}/>
        })}
      </div>
    )
  }
});

module.exports = SectionList;
