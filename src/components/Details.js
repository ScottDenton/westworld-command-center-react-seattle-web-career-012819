import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo.js'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => {
    // console.log(props.selectedHost)
    // console.log(props.hosts)
    const selectedHost = props.hosts.find((host)=> {
      return   host.id ===props.selectedHost.id
    })
    console.log(selectedHost)
    if (props.selectedHost ===0){
      return <Image size='medium' src={Images.westworldLogo}/>
    } else {
      return <HostInfo
        host={selectedHost}
        toggleActive={props.toggleActive} />
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
