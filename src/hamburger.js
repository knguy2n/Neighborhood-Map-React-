// hamburger Menu
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Hamburger extends React.Component {


    constructor(){
    super();
    this.state = {
    venues:[],
    markers:[],
    center:[],
    zoom: 12,
    query: "chicken"

    };
  }


  updateQuery = (query) => (
    this.setState({query: query.trim() })

    
    )

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const { query } = this.state

    return (
    	<div height={'100%'} >
        
    		<Menu width={'25%'} className='sdPlaces'>
        <input
          type="text" 
          placeholder='Search'
          value={query}
          className="search-locations"
          onChange={(event) => this.updateQuery(event.target.value)}
        />
          
        
          <div className="places"></div>
        </Menu>
    	</div>

    	
      

    );
  }
}

export default Hamburger;