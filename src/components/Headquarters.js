import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import HostList from './HostList.js'


class Headquarters extends Component {

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <HostList
          hosts={this.props.hosts}
          handleClickOnHostTab={this.props.handleClickOnHostTab}
          selectedHost={this.props.selectedHost}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            hosts={this.props.hosts}
            selectedHost= {this.props.selectedHost}
            toggleActive={this.props.toggleActive}
            changeHostArea={this.props.changeHostArea}/>
        </Grid.Column>
        <Grid.Column width={3}>


        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
