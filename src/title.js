// title
import React, { Component } from 'react';





class Title extends React.Component {

	render(){
		return(

			<nav className="title">
        <button
          
          className="hamburger"
          tabIndex="0"
          aria-label="navigation-button"
          onClick={this.props.sidebarToggleHandler}
        >
          <div className="button-line"></div>
          <div className="button-line"></div>
          <div className="button-line"></div>
        </button>
        <h1>Parks in SD</h1>


			</nav>


			)
	}


}

export default Title;