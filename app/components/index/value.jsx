var React = require('react');

var Value = React.createClass({
  displayName: 'Value Component',

  getDefaultProps: function () {
    return {
      points: [
        {
          title: 'Clean & Safe',
          description: 'We take pride in ensuring that our facilities are always cleaned and well maintained. Our state of the art design was built for safety first.',
          icon_class: 'fa-lock'
        },
        {
          title: 'Personalized Care',
          description: 'All of our pawesome guests are treated as individual vacationers. That means we ensure that everyone get enough 1-1 attention.',
          icon_class: 'fa-check'
        },
        {
          title: 'Worldclass Service',
          description: 'Our goal is to WOW our customers. From the moment they arrive for drop-off to pickup and beyond. We care because you care!',
          icon_class: 'fa-globe'
        }
      ]
    };
  },

  render: function () {
    return (
      <section className="value">
        <div className="row">
          {this.props.points.map(function(point, index) {
            return <ValueItem title={point.title} description={point.description} icon_class={point.icon_class} key={"valueItem-"+ index}/>
          })}
        </div>
      </section>
    );
  }
});

var ValueItem = React.createClass({
  render: function () {
    var iconClass = "fa " + this.props.icon_class;
    return (
      <div className="medium-4 columns">
        <i className={iconClass}></i>
        <p className="lead">{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
});

module.exports = Value;
