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
          <div className="places">
           
          </div>
          
          

        </Menu>
    	</div>

    	
      

    );
  }
}

export default Hamburger;