import React,{ Component} from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

export default class Host extends Component {
handleClickOnHostTab =() => {
  this.props.handleClickOnHostTab(this.props.host)
}

  render(){
    return(
      <Card
        className= {  this.props.selectedHost.id=== this.props.host.id ?  "host selected" : "host"}
        onClick={this.handleClickOnHostTab}
        image={ this.props.host.imageUrl}
        raised
        />
    )
  }
}
