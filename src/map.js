/* global google */

import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";





const MyMapComponent = withScriptjs(
 

//take results from FourSquare query and create markers & infowindows
	withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    zoom={props.zoom}
    center={{lat: parseFloat(props.center.lat), lng: parseFloat(props.center.lng)
            }}
    defaultCenter={{ lat: -34, lng: 150 }}
  >
    {props.markers && props.markers.filter(marker => marker.isVisible)
    	.map((marker, index, arr) => {
        
        const venueInfo = props.venues.find(venue => venue.id === marker.id);
          
          return( 
            <Marker
              defaultAnimation={google.maps.Animation.DROP} 
              key={index} 
              position= {{ lat:marker.lat, lng:marker.lng }}
              onClick={() => {
                props.openInfoWindow(marker);                             
              }} 
              animation={arr.length === 1 ? google.maps.Animation.BOUNCE  : google.maps.Animation.DROP} 

           >
          { marker.isOpen && venueInfo.bestPhoto  && (
            <InfoWindow
            tabIndex="0"
               
            >

              <React.Fragment>
                <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix }` || null }    alt={"Venue"}  /> 
                <p>{venueInfo.name}</p> 
                <button
                  onClick={() =>{props.sidebarToggleHandler()}}

                >
                  Back to Nav
                </button>

              </React.Fragment>      
            </InfoWindow> 
          )}
        </Marker> 
        );
      })}   	
  </GoogleMap>
	))




export default class Map extends Component {

  componentDidMount () {
      window.gm_authFailure = () => {
          alert('Error: Failed to get Google map.')
          console.log('Error: Failed to get Google map.')
      }
    }


	render() {
		return(
      
     
      
        <MyMapComponent
				  {...this.props}
            aria-label='map'
            className="gmaps"
  				  googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=NEEDTOADDKEY"
  				  loadingElement={<div style={{ height: `100%` }} />}
  				  containerElement={<div style={{ height: `100%`, width:`100%` }} />}
  				  mapElement={<div style={{ height: `92%` }} />}
        />
    

		)
	}
};





