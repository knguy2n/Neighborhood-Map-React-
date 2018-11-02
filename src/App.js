/* global google */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css';
import Title from './title.js'
import Media from "react-media"
import Map from "./map.js"
import SquareAPI from "./API/"
import Sidebar from "./sidebar.js"

class App extends Component {

  constructor(){
    super();
    this.state = {
    venues:[],
    markers:[],
    center:[],
    zoom: 12,
    query: "chicken"

    };
  }

  
  
  toggleBounce = (marker) => {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  };

  openInfoWindow = (marker) => {
    this.closeInfoWindow();  
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, marker)});
    const venue = this.state.venues.find(venue => venue.id ===marker.id);
    
    SquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue );
      this.setState({venues: Object.assign(this.state.venues, newVenue)});
    })
};
   

  
  

  closeInfoWindow = () => { 
    let markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({markers: Object.assign(this.state.markers, markers)});
  }

  
  componentDidMount() {
    SquareAPI.search({
      near: "San Diego, CA",
      query: this.state.query,
      limit: 20,

    }).then(results => {
     
      const {venues} = results.response;
      const {center} = results.response.geocode.feature.geometry;
      
      const markers = venues.map(venue => {
        return {
          lat: parseFloat(venue.location.lat),
          lng: parseFloat(venue.location.lng),
          isOpen: false,
          isVisible: true,
          id: venue.id

        };   
         
      });
      this.setState({venues,center,markers});
      
    });
  }
  





  render() {
    return (
      <div className="App">
        <Sidebar {...this.state}/>
        <Map {...this.state}
          openInfoWindow={this.openInfoWindow}
          toggleBounce={this.toggleBounce}
        />
        

      </div>
    );
  }
}







export default App;


