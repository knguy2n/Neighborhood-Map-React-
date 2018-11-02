//Sidebar
import React, { Component } from 'react';
import Venuelist from "./venuelist"


class Sidebar extends Component {
	render() {
		return(
			<div className="sidebar">
				<input 
					type={"search"} 
					id={"search"}
					placeholder={"search places"}
					/>
				<Venuelist{...this.props}/>
			</div>
		)
	}
}

export default Sidebar;