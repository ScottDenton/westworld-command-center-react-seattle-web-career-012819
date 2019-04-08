import React,{Component} from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host.js'

export default class HostList extends Component{
  handleClickOnHostTab =(host) => {
    this.props.handleClickOnHostTab(host)
  }

  render(){
    const decommissionedHosts = this.props.hosts.filter(host => {
      return host.active === false
    })
    return(
      <Card.Group itemsPerRow={6}>
        {decommissionedHosts.map(thisHost =>{
          return <Host
              host={thisHost}
              key={thisHost.id}
              handleClickOnHostTab={this.handleClickOnHostTab}
              selectedHost = {this.props.selectedHost}/>
        })}
      </Card.Group>
    )
  }
}
