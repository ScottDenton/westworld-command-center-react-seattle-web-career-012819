import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo.js'


const Details = (props) => {
  const renderSomething = () => {
    const selectedHost = props.hosts.find((host)=> {
      return   host.id ===props.selectedHost.id
    })
    if (props.selectedHost ===0){
      return <Image size='medium' src={Images.westworldLogo}/>
    } else {
      return <HostInfo
        host={selectedHost}
        toggleActive={props.toggleActive}
        changeHostArea={props.changeHostArea}/>
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
