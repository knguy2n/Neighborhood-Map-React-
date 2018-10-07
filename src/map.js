//map component
import React, { Component } from 'react';


class GMap extends Component {

	state = {
	locations: [
   		{title:'La Jolla Shores', location:{lat:32.858995, lng:-117.255745}, activity:'Places', id:'1' },
        {title:'San Diego Zoo',location:{lat:32.735316, lng:-117.149046}, activity:'Places', id:'2' },
        {title:'The Forum Coffee House',location:{lat:32.822429, lng:-117.184253}, activity:'Drinks', id:'3' },
        {title:'Lucha Libre Tacos',location:{lat:32.748696, lng:-117.12978}, activity:'Food', id:'4' },
        {title:'Dumpling Inn',location:{lat:32.824251, lng:-117.154314}, activity:'Food', id:'5' },
        {title:'Tea n More',location:{lat:32.832921, lng:-117.159955}, activity:'Drinks', id:'6' }
    	]

	}

	componentDidMount() {
		this.loadMap()
		
	}

	loadMap = () => {
		loadScript("https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyCeQ-GblthTZ2fEPJxSd_jCYWcza_U5eGk&callback=initMap")
		window.initMap = this.initMap
	}

	


	initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.748696, lng: -117.12978},
          zoom: 12
        });

		let marker = [];
		let infoWindow = new window.google.maps.InfoWindow();
	
		//Uses the location array to create new array of markers to display on Map
		for(let i = 0; i < this.state.locations.length; i++) {

			//Get position from the location array
			let position = this.state.locations[i].location;
			let title = this.state.locations[i].title;
			let activity = this.state.locations[i].activity
			//Create a marker per location, and put into markers array
			let marker = new window.google.maps.Marker({
				map: map,
				position: position,
				title: title,
				id: i,
				activity:activity,
				animation: window.google.maps.Animation.DROP,
			});
			let markers = [];
			//push newly created markers into markers array
			markers.push(marker);
			
			marker.addListener('click', function(){
				populateInfoWindow(this, infoWindow);
				toggleBounce(this);


			});

		function populateInfoWindow(marker, infowindow) {
			if (infowindow.marker != marker) {
				infowindow.marker = marker;
				infowindow.setContent('<div>' + marker.title + '</div>');
				infowindow.open(map, marker);

				// clear marker property and stop bounce animation is clear when info window is closed
				infowindow.addListener('closeclick', function(){
					infowindow.marker = null;
					marker.setAnimation(null);

				});
			}
		};


		function toggleBounce(marker) { 
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          stopAnimation(marker);
        }
        marker.addListener('closeclick', function(){
        	marker.setAnimation(null);
        })
		

      };


		}

		function stopAnimation(marker) {
			setTimeout(function () {
			marker.setAnimation(null);
		}, 2000);
}

      }

   

	render() {
		return(
			<main>
				<div id="map"></div>
			</main>
			

			
			)
	}
}



function loadScript(url){
	const index = window.document.getElementsByTagName('script')[0]
	const script = window.document.createElement('script')
	script.src= url
	script.async = true
	script.defer = true
	index.parentNode.insertBefore(script, index)
}

/*


*/

export default GMap;