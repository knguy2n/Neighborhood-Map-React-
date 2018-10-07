// title
import React, { Component } from 'react';
import Hamburger from './hamburger'
import Media from "react-media"

  let locations = [
        {title:'La Jolla Shores', location:{lat:32.858995, lng:-117.255745}, activity:'Places', id:'1' },
        {title:'San Diego Zoo',location:{lat:32.735316, lng:-117.149046}, activity:'Places', id:'2' },
        {title:'The Forum Coffee House',location:{lat:32.822429, lng:-117.184253}, activity:'Drinks', id:'3' },
        {title:'Lucha Libre Tacos',location:{lat:32.748696, lng:-117.12978}, activity:'Food', id:'4' },
        {title:'Dumpling Inn',location:{lat:32.824251, lng:-117.154314}, activity:'Food', id:'5' },
        {title:'Tea n More',location:{lat:32.832921, lng:-117.159955}, activity:'Drinks', id:'6' }
      ];






class Title extends React.Component {

	render(){
		return(

			<nav id="outer-container" className="title">
				<Media query="(max-width: 600px)">
          			{matches => matches ? (
              			<h1>Kien's Map</h1>
            			) : 
          				(<h1>Kien's Neighborhood Map</h1>)
          			}		
        		</Media>
				<Hamburger locations={locations} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>

			</nav>


			)
	}


}

export default Title;