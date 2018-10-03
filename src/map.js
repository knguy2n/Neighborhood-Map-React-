//map component
import React, { Component } from 'react';


class GMap extends Component {


	componentDidMount() {
		this.loadMap()
	}

	loadMap = () => {
		loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCeQ-GblthTZ2fEPJxSd_jCYWcza_U5eGk&callback=initMap")
		window.initMap = this.initMap
	}

	initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.748696, lng: -117.12978},
          zoom: 8
        });


        let marker = new window.google.maps.Marker({
    		position: {lat: 32.748696, lng: -117.12978},
    		map: map,
    		title: 'Hello World!'
    	});
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