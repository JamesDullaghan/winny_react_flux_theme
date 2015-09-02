var React = require('react');

var GoogleMap = React.createClass({
  displayName: 'Map Component',

  getDefaultProps: function () {
    return {
      facility: {
        latitude: '32.718948',
        longitude: '-117.139355',
        name: 'The Pet Hotel',
        address: '5745 Riddle Way.',
        city: 'Pawsomeville, OH, 15482',
        email: 'info@thepethotel.com',
        phone: '8778052498',
        display_phone: '(877) 805-2498'
      }
    }
  },

  componentDidMount: function () {
    this.map = this.createMap();
    this.marker = this.createMarker();
    this.infoWindow = this.createInfoWindow();
  },

  componentWillUnmount: function () {
    this.map = null;
    this.infoWindow = null;
    this.marker = null;
  },

  createMap: function () {
    var mapOptions = {
      minZoom: 12,
      zoom: 12,
      center: new google.maps.LatLng(this.props.facility.latitude, this.props.facility.longitude)
    }

    var map = new google.maps.Map(this.refs.map_canvas.getDOMNode(), mapOptions)
    return map
  },

  createMarker: function () {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.props.facility.latitude, this.props.facility.longitude),
      map: this.map
    });

    return marker;
  },

  createInfoWindow: function () {
    var lineBreak = "<br/>"
    var contentString = "<div class='InfoWindow'>" +
      this.props.facility.name + lineBreak +
      this.props.facility.address + lineBreak +
      this.props.facility.city + lineBreak +
      this.props.facility.email + lineBreak +
      this.props.facility.display_phone

    var infoWindow = new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    });

    return infoWindow;
  },

  render: function () {
    return(
      <div className="GMap">
        <div id="map_canvas" ref="map_canvas"></div>
      </div>
    );
  }

});

module.exports = GoogleMap;
