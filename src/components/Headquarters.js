import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import HostList from './HostList.js'


class Headquarters extends Component {

  constructor(props){
    super(props)
    this.state = {
      hosts: []
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

  render(){
    const hosts = this.state.hosts
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <HostList hosts={hosts}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details />
        </Grid.Column>
        <Grid.Column width={3}>


        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
