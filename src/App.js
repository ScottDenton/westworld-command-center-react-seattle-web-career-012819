import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap.js'
import Headquarters from './components/Headquarters.js'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      hosts: [],
      selectedHost: 0
    }
  }

  componentDidMount(){
      fetch('http://localhost:4000/hosts')
      .then(resp => resp.json())
      .then(hosts => {
        this.setState({
          hosts: hosts
        })
      })
    }

    handleClickOnHostTab =(host) => {
      this.setState({
        selectedHost: host
      })
    }
    changeHostArea = (thisHost, newArea) =>{
      const updatedHosts = this.state.hosts.map(host => {
        return host.id === thisHost.id ? {...host, area: newArea} : host
      })
      this.setState({
        hosts: updatedHosts
      })
    }

    toggleActive =(id) =>{
      const updatedHosts = this.state.hosts.map(host => {
        return host.id === id ? {...host, active: !host.active} : host
      })
      this.setState({
        hosts: updatedHosts
      })
    }



  render(){

    return (
      <Segment id='app'>
        <WestworldMap
          hosts={this.state.hosts}
          selectedHost={this.state.selectedHost}
          handleClickOnHostTab={this.handleClickOnHostTab}/>
        <Headquarters
          hosts={this.state.hosts}
          selectedHost ={this.state.selectedHost}
          toggleActive={this.toggleActive}
          changeHostArea={this.changeHostArea} handleClickOnHostTab={this.handleClickOnHostTab}/>
      </Segment>
    )
  }
}

export default App;
