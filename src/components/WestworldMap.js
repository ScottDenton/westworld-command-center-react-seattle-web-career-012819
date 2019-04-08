import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area.js'


class WestworldMap extends Component {
  constructor(props){
    super(props)
    this.state={
      areas: []
    }
  }

  componentDidMount(){
      fetch('http://localhost:4000/areas')
      .then(resp => resp.json())
      .then(areas => {
        this.setState({
          areas: areas
        })
      })
  }

  render(){
  const areasToDisplay = this.state.areas.map(area => {
    const thisAreasHosts= this.props.hosts.filter((host) => {
    return host.area === area.name && host.active
    })
    return <Area
      area={area} key={area.name} limit={area.limit} hosts={thisAreasHosts} selectedHost={this.props.selectedHost}
      handleClickOnHostTab={this.props.handleClickOnHostTab}
      />
  })
    return (
      <Segment id="map" >
        {areasToDisplay}
      </Segment>
    )

  }
} //end of class

export default WestworldMap
