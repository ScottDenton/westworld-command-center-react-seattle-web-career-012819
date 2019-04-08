import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area.js'

export default class WestworldMap extends Component {
  render(){
    const areasToDisplay = this.props.areas.map(area => {
      const thisAreasHosts= this.props.hosts.filter((host) => {
        return host.area === area.name && host.active
      })
      return <Area
        area={area} key={area.name}
        limit={area.limit} hosts={thisAreasHosts}
        selectedHost={this.props.selectedHost}
        handleClickOnHostTab={this.props.handleClickOnHostTab}
        />
      })
      return (
        <Segment id="map" >
          {areasToDisplay}
        </Segment>
      )
  }
}
