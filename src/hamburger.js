// hamburger Menu
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }


  /*
  const locations = [
    {title:'La Jolla Shores', location:{lat:32.858995, lng:-117.255745}, activity:'Places' },
    {title:'San Diego Zoo',location:{lat:32.735316, lng:-117.149046}, activity:'Places' },
    {title:'The Forum Coffee House',location:{lat:32.822429, lng:-117.184253}, activity:'Drinks' },
    {title:'Lucha Libre Tacos',location:{lat:32.748696, lng:-117.12978}, activity:'Food' },
    {title:'Dumpling Inn',location:{lat:32.824251, lng:-117.154314}, activity:'Food' },
    {title:'Tea n More',location:{lat:32.832921, lng:-117.159955}, activity:'Drinks' }
  ];
*/
  render () {
    return (
    	<div height={'100%'} >
    		<Menu width={'25%'} >
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