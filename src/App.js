import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './title.js'
import Media from "react-media"
import GMap from "./map.js"
import SquareAPI from "./API/"

class App extends Component {

  constructor(){
    super();
    this.state = {
    venues:[],
    markers:[],
    center:[],
    zoom: 15
    };
  }
  
  componentDidMount() {
    SquareAPI.search({
      near: "San Diego, CA",
      query: "dumplings",
      limit: 10,

    }). then(results =>{
      console.log(results);
    });
  }
  





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


