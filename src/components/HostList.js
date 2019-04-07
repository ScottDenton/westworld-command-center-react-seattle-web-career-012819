import React,{Component} from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host.js'

class HostList extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedHost: 0
    }
  }

  handleClick =(id) => {
  this.setState({
    selectedHost: id
  })
  }

  render(){
    return(
      <Card.Group itemsPerRow={6}>
        {this.props.hosts.map(thisHost =>{
          return <Host
              host={thisHost}
              key={thisHost.id}
              handleClick={this.handleClick}
              selectedId = {this.state.selectedHost}/>
        })}
      </Card.Group>
    )

  }
}

export default HostList
