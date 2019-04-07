import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import HostList from './HostList.js'


class Headquarters extends Component {

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

    toggleActive =(id) =>{
      const updatedHosts = this.state.hosts.map(host => {
        return host.id === id ? {...host, active: !host.active} : host
      })
      this.setState({
        hosts: updatedHosts
      })

    }

  render(){
    // console.log(this.state.hosts)
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <HostList
          hosts={this.state.hosts}
          handleClickOnHostTab={this.handleClickOnHostTab}
          selectedHost={this.state.selectedHost}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            hosts={this.state.hosts}
            selectedHost= {this.state.selectedHost}
            toggleActive={this.toggleActive}/>
        </Grid.Column>
        <Grid.Column width={3}>


        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
