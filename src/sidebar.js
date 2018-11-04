//Sidebar
import React, { Component } from 'react';
import Venuelist from "./venuelist"


class Sidebar extends Component {
	constructor(){
    	super();
    	this.state = {
    		query: "",
    		venues:[]
    	};
    } 

	handleFilterVenues = () => {
		if(this.state.query.trim() !== "") {
			const venues = this.props.venues.filter(venue => venue.name
				.toLowerCase()
				.includes(this.state.query.toLowerCase()))
			return venues;
		}
		return this.props.venues;
	};

	handleChange = e => {
		this.setState( {query:e.target.value} );
		
		const markers = this.props.venues.map(venue => {
			const isMatched = venue.name
			.toLowerCase()
			.includes(e.target.value.toLowerCase());
			const marker = this.props.markers.find(marker => marker.id === venue.id);
			if(isMatched) {
				marker.isVisible = true;
			} else{
				marker.isVisible = false;

			}
			return marker;
		});
		this.props.updateSuperState({markers})

	};



	render() {
		return(
			<div className="sidebar"
			
			>
				<input 
					type={"search"} 
					id={"search"}
					placeholder={"filter places"}
					onChange={this.handleChange}
					/>
				<Venuelist
				{...this.props} 
				venues={this.handleFilterVenues()}
				handleListItemClick={this.props.handleListItemClick}
				sidebarToggleHandler={this.props.sidebarToggleHandler}
				/>
				<div className="backdrop"></div>
			</div>
		)
	}
}

export default Sidebar;