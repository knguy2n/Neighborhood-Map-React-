import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './title.js'
import Media from "react-media"
import GMap from "./map.js"


class App extends Component {





  render() {
    return (
      <div className="App">
        {/*<Media query="(max-width: 599px)">
          {matches => matches ? (
          <p>The document is less than 600px wide.</p>
          ) : 
          ( <p>The document is at least 600px wide.</p>)
          }   
        </Media>*/}
        <Title/>
        <GMap/>

      </div>
    );
  }
}







export default App;


