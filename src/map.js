import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const MyMapComponent = withScriptjs(
	withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    zoom={props.zoom}
    center={props.center}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.markers && props.markers.filter(marker => marker.isVisible)
    	.map((marker, index) => {
        
        const venueInfo = props.venues.find(venue => venue.id === marker.id);
          
          return( 
            <Marker 
              key={index} 
              position= {{ lat: +marker.lat, lng: +marker.lng }}
              onClick={() => props.openInfoWindow(marker)}
           >
          { marker.isOpen && venueInfo.bestPhoto && (
            <InfoWindow>
              <React.Fragment>
                <img src={`${venueInfo.bestPhoto.prefix}250x250${venueInfo.bestPhoto.suffix }`} alt={"Venue"}/>
                <p>{venueInfo.name}</p> 
              </React.Fragment>      
            </InfoWindow> 
          )}
        </Marker> 
        );
      })}   	
  </GoogleMap>
	))




export default class Map extends Component {
	render() {
		return(
			<MyMapComponent
				{...this.props}
  				googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyCeQ-GblthTZ2fEPJxSd_jCYWcza_U5eGk"
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `90vh` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
			/>

		)
	}
};





