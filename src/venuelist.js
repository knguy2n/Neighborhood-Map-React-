//venuelist
import React, { Component } from 'react';
import Venueitem from "./venueitem"



class Venuelist extends Component {
	render() {
		return(
			<ol className="venuelist">
				{this.props.venues && 
					this.props.venues.map((venue,idx) => (<Venueitem key={idx} {...venue} 
				handleListItemClick={this.props.handleListItemClick}
				sidebarToggleHandler={this.props.sidebarToggleHandler}
					  /> ))}

			</ol>
		)

	}
}

export default Venuelist;