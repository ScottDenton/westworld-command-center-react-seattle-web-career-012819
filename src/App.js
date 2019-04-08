import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap.js'
import Headquarters from './components/Headquarters.js'
import Log from './services/Log.js'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      areas: [],
      hosts: [],
      selectedHost: 0,
      allActivated: false,
      logs: []
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
      fetch('http://localhost:4000/areas')
      .then(resp => resp.json())
      .then(areas => {
        this.setState({
          areas: areas
        })
      })
    }

    handleClickOnHostTab =(host) => {
      this.setState({
        selectedHost: host
      })
    }

    findHostsInArea = (areaToCount) => {
      return this.state.hosts.filter(host => {
        return host.area === areaToCount
      })
    }

    changeHostArea = (thisHost, newArea) =>{
      const areaLimit = this.state.areas.find((area) => {
        return area.name=== newArea
      }).limit

      const hostsInThisArea = (this.findHostsInArea(newArea)).length + 1

      if(hostsInThisArea <= areaLimit){
        const updatedHosts = this.state.hosts.map(host => {
          return host.id === thisHost.id ? {...host, area: newArea} : host
        })

        this.setState({
          hosts: updatedHosts,
          logs: [...this.state.logs, Log.notify(`${thisHost.firstName} set in area ${newArea}`) ]
        })

      } else {
        const message = Log.error(`Too many hosts. Cannot add ${thisHost.firstName} to ${newArea}`)
        this.setState({
          logs: [...this.state.logs, message]
        })
      }
      console.log(thisHost)
    }

    toggleActive =(thisHost) =>{
      const updatedHosts = this.state.hosts.map(host => {
        return host.id === thisHost.id ? {...host, active: !host.active} : host
      })
      let message;
      if (!thisHost.active ? message = Log.warn(`Activated ${thisHost.firstName} `)  : message = Log.notify(`Decommisioned ${thisHost.firstName} `) )
      this.setState({
        hosts: updatedHosts,
        logs: [...this.state.logs, message ]
      })
    }

    handleButtonClick =() => {
      let updatedHosts;
      let message;
      if(this.state.allActivated){
         updatedHosts = this.state.hosts.map(host => {
          return {...host, active: true}
        })
        message = Log.warn("Activating all hosts!")

      } else {
         updatedHosts = this.state.hosts.map(host => {
          return {...host, active: false}
        })
        message = Log.notify("Decommissiong all hosts.")
      }
      this.setState({
        hosts: updatedHosts,
        allActivated: !this.state.allActivated,
        logs: [...this.state.logs, message ]
      })
    }



  render(){

    return (
      <Segment id='app'>
        <WestworldMap
          areas = {this.state.areas}
          hosts={this.state.hosts}
          selectedHost={this.state.selectedHost}
          handleClickOnHostTab={this.handleClickOnHostTab}/>
        <Headquarters
          hosts={this.state.hosts}
          selectedHost ={this.state.selectedHost}
          toggleActive={this.toggleActive}
          changeHostArea={this.changeHostArea} handleClickOnHostTab={this.handleClickOnHostTab}
          handleButtonClick={this.handleButtonClick}
          allActivated ={this.state.allActivated}
          logs ={this.state.logs}/>
      </Segment>
    )
  }
}

export default App;
