import React,{ Component} from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

class Host extends Component {
  constructor(props){
    super(props)
    this.state=({...this.props.host})
  }

handleClick =() => {
  this.props.handleClick(this.props.host.id)
}

  render(){

    return(
      <Card
        className= {  this.props.selectedId=== this.props.host.id ?  "host selected" : "host"}
        onClick={this.handleClick}
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
