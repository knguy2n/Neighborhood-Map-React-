
import React, { Component } from 'react'


class Venueitem extends Component {
	render() {
		return(
			<li className="venueitem">
				{this.props.name}
			</li>

			
		)
	}
}

export default Venueitem;