import React,{ Component} from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

class Host extends Component {
  constructor(props){
    super(props)
  }

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

export default Host





// handleClick =() => {
//   this.setState({
//     selected: !this.state.selected
//   })
// }
