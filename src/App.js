import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Collection from "./Js/Components/Collection.js";

class App extends Component {
  constructor(){
    super();
    
  }
  render() {
    return (
      <div className="App">
        <Collection key ="hotNews" keyValue="hotNews" title="Hot News"></Collection>
        <hr/>

        <Collection key ="new" keyValue="news" title="Latest News"></Collection>
        <hr/>
        
        <Collection key ="rising" keyValue="risingNews" title="Rising News"></Collection>
      </div>
    );
  }
}

export default App;
