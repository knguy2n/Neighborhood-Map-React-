// title
import React, { Component } from 'react';
import Hamburger from './hamburger'
import Media from "react-media"



class Title extends React.Component {

	render(){
		return(

			<div id="outer-container" className="title">
				<Media query="(max-width: 600px)">
          			{matches => matches ? (
              			<h1>Kien's Map</h1>
            			) : 
          				(<h1>Kien's Neighborhood Map</h1>)
          			}		
        		</Media>
				<Hamburger pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>

			</div>


			)
	}


}

export default Title;