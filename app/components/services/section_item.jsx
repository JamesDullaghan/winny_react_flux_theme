var React = require('react');

var SectionItem = React.createClass({
  displayName: 'Page Section Item',

  renderContent: function () {
    return {__html: this.props.section.content}
  },

  render: function () {
    return (
      <div className="row">
        <div className="small-12 columns text-center">
          <h1>{this.props.section.title}</h1>
          <p dangerouslySetInnerHTML={this.renderContent()}/>
        </div>
      </div>
    )
  }
});

module.exports = SectionItem;
