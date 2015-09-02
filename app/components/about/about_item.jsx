var React = require('react');

var AboutItem = React.createClass({
  displayName: 'About Section Item',

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

module.exports = AboutItem;
