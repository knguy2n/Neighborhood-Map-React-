// title
import React, { Component } from 'react';
import Media from "react-media"




class Title extends React.Component {

	render(){
		return(

			<nav className="title">
        <button className="hamburger"
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