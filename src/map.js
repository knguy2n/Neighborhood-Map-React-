import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(
	withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    zoom={props.zoom}
    center={props.center}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    { props.markers && props.markers.filter(marker => marker.isVisible)
    	.map((marker, index) => (
    		<Marker key={index} position= {{ lat: +marker.lat, lng: +marker.lng }} />
    	))}   	
  </GoogleMap>
	))




export default class Map extends Component {
	render() {
		return(
			<MyMapComponent
				{...this.props}
  				googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyCeQ-GblthTZ2fEPJxSd_jCYWcza_U5eGk"
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `92.3vh` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
			/>

		)
	}
};





