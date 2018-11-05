/* global google */
import Title from "./title.js"
import React, { Component } from 'react'
import './App.css';
import Map from "./map.js"
import SquareAPI from "./API/"
import Sidebar from "./sidebar.js"

class App extends Component {

  constructor(){
    super();
    this.state = {
    venues:[],
    sidebarOpen:false,
    markers:[],
    center:[],
    zoom: 10,
    updateSuperState: obj => {
      this.setState(obj); 
    }

    };
  }


//Open side nav
  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    })
  };
  

//Open infowindow and show venue details
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

   handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.openInfoWindow(marker)
   };

  closeInfoWindow = () => { 
    let markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({markers: Object.assign(this.state.markers, markers)});
  }

//Once app is mounted to root pull results from FourSquare  
  componentDidMount() {
    SquareAPI.search({
      near: "Encinitas, CA",
      intent: "checkin",
      query: "beach",
      limit: 7,
      
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
      console.log(results);
    });
  }
  
  render() {
    
    return (
      <div className="App"> 
        <Title {...this.state} 
          sidebarToggleHandler={this.sidebarToggleHandler}
          handleClicks={this.handleClicks}
         /> 
           
        {this.state.sidebarOpen && 
          <Sidebar {...this.state}
          closeInfoWindow={this.closeInfoWindow} 
          handleListItemClick={this.handleListItemClick}
          sidebarToggleHandler={this.sidebarToggleHandler}
          handleClicks={this.handleClicks}
            />}
        <Map {...this.state}
          openInfoWindow={this.openInfoWindow}
          toggleBounce={this.toggleBounce}
          sidebarToggleHandler={this.sidebarToggleHandler}
        />
      </div>
    );
  }
}


export default App;


