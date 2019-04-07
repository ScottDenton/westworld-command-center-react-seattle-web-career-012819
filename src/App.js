import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap.js'
import Headquarters from './components/Headquarters.js'


class App extends Component {




  render(){

    return (
      <Segment id='app'>
        <WestworldMap />
        <Headquarters />
      </Segment>
    )
  }
}

export default App;
