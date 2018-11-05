import Media from "react-media"
import React, { Component } from 'react'


class Venueitem extends Component {
	render() {
		return(
			<Media query="(max-width: 680px)">
				{matches =>matches ? (
					<button
						id="anchor" 
						className="venueitem"
						tabIndex="0"
						onClick={() => {
							this.props.handleListItemClick(this.props);
							this.props.sidebarToggleHandler();
						}}	
					>
						{this.props.name}				
					</button>
    			):(
    				<button 
    					id="anchor" 
    					className="venueitem"
    					tabIndex="0"
        				onClick={() => {
        					this.props.handleListItemClick(this.props);
							this.props.sidebarToggleHandler(); 
						}}
					>
					<img src={this.props.categories[0].icon.prefix+
						"32"+this.props.categories[0].icon.suffix} 
						alt={this.props.categories[0].name}/>
					{this.props.name}				
					</button>
    			)}
			</Media>		
		)
	}
}

export default Venueitem;
