var React = require('react');
var AboutItem = require('./about_item');

var AboutList = React.createClass({
  displayName: 'About List Component',

  render: function () {
    return (
      <div>
        {this.props.sections.map(function(section, index){
          return <AboutItem section={section} key={"section-"+ index}/>
        })}
      </div>
    )
  }
});

module.exports = AboutList;
