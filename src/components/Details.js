import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo.js'


const Details = (props) => {
  const renderDetails = () => {
    //find the selected host
    const selectedHost = props.hosts.find((host)=> {
      return   host.id ===props.selectedHost.id
    })
    // if no host has been selected display generic image
    if (props.selectedHost ===0){
      return <Image size='medium' src={Images.westworldLogo}/>
    }
    // else display correct host
    else {
      return <HostInfo
        host={selectedHost}
        toggleActive={props.toggleActive}
        changeHostArea={props.changeHostArea}/>
    }
  }
  return(
    <Segment id="details" className="HQComps">
      {renderDetails()}
    </Segment>
  )
}

export default Details
