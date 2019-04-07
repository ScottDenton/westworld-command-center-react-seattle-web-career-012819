import React from 'react';
import '../stylesheets/Area.css'



const Area = (props) => (

  <div className='area' id={props.area.name}>
    <h3 className='labels'>{props.area.name.split('_').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length)
  }).join(' ')}</h3>

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
