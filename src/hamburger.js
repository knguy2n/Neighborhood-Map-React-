// hamburger Menu
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
    	<div height={'100%'} >
    		<Menu width={'25%'}>
       			 <a id="home" className="menu-item" href="/">Home</a>
       			 <a id="about" className="menu-item" href="/about">About</a>
        		<a id="contact" className="menu-item" href="/contact">Contact</a>
        		<a href="" className="menu-item">Test</a>
        		<a  className="menu-item" href="">Settings</a>
      		</Menu>
    	</div>

    	
      

    );
  }
}

export default Hamburger;