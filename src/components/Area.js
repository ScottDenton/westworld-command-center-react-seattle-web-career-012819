import React from 'react';
import '../stylesheets/Area.css'
import Host from './Host.js'
import { Card } from 'semantic-ui-react'




const Area = (props) => (

  <div className='area' id={props.area.name}>
    <h3   className='labels'>{props.area.name.split('_').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length)
  }).join(' ')}
  </h3>
<Card.Group itemsPerRow={6}>
      {props.hosts.map(host => {
        return <Host
          host={host} key={host.id}
          selectedHost={props.selectedHost} handleClickOnHostTab={props.handleClickOnHostTab}/>
        })
      }
    </Card.Group>
  </div>


)
Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
