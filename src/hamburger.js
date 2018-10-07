// hamburger Menu
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Hamburger extends React.Component {
  state = {

  }

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
    	<div height={'100%'} >
    		<Menu width={'25%'} className='sdPlaces'>
          {this.props.locations.map((location, key) => (
            <a href="" key={location.id}>
              {location.title}
            </a>

            ))}

        </Menu>
    	</div>

    	
      

    );
  }
}

export default Hamburger;