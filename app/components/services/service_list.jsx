var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ServiceItem = React.createClass({
  displayName: 'Service Item',

  render: function () {
    return (
      <li>
        <img src={this.props.service.main_image_url} alt={this.props.service.name + " Image"}/>
        <div className="services-panel">
          <h4 className="title">{this.props.service.name}</h4>
          <p>{this.props.service.short_description}</p>
          <b>{this.props.service.display_price}</b>
          <br/>
          <Link to="service" params={{serviceId: this.props.service.id}} className="button primary">More details...</Link>
        </div>
      </li>
    )
  }
});

var ServiceList = React.createClass({
  displayName: 'List of Services',

  render: function () {
    return (
      <section className="row">
        <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-3">
          {this.props.services.map(function(service, index){
            return <ServiceItem service={service} key={"service-" + index}/>
          })}
        </ul>
      </section>
    )
  }
});

module.exports = ServiceList;
