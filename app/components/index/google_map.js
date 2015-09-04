import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map        = this.createMap();
    this.marker     = this.createMarker();
    this.infoWindow = this.createInfoWindow();
  }

  componentWillUnmount() {
    this.map        = null;
    this.marker     = null;
    this.infoWindow = null;
  }

  createMap() {
    let latitude  = this.props.facility.latitude;
    let longitude = this.props.facility.longitude;
    let mapNode   = this.findDOMNode('map_canvas');

    let mapOptions = {
      minZoom: 12,
      zoom: 12,
      center: new google.maps.LatLng(latitude, longitude);
    }

    let map = new google.maps.Map(mapNode, mapOptions);
    return map;
  }

  createMarker() {
    let latitude  = this.props.facility.latitude;
    let longitude = this.props.facility.longitude;

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: this.map
    });

    return marker;
  }

  createInfoWindow() {
    let lineBreak     = "<br/>";
    let name          = this.props.facility.name;
    let address       = this.props.facility.address;
    let city          = this.props.facility.city;
    let email         = this.props.facility.email;
    let displayPhone  = this.props.facility.display_phone;
    let contentString = `<div class='InfoWindow'>
      ${name}${lineBreak}${address}${lineBreak}
      ${city}${lineBreak}${email}${lineBreak}
      ${displayPhone}`;

    let infoWindow = new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    });

    return infoWindow;
  }

  render() {
    return (
      <div className="GMap">
        <div id="map_canvas"></div>
      </div>
    )
  }
}

export default GoogleMap;
