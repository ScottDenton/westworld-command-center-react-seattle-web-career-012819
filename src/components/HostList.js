import React,{Component} from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host.js'

class HostList extends Component{
  constructor(props){
    super(props)
  }

    handleClickOnHostTab =(host) => {
      this.props.handleClickOnHostTab(host)
    }

  render(){
    return(
      <Card.Group itemsPerRow={6}>
        {this.props.hosts.map(thisHost =>{
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

export default HostList
