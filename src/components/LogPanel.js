import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

 const LogPanel = (props) => {
  let logs = props.logs
  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.reverse().map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      <Button
        fluid
        color={props.allActivated ? "red" : "green"}
        content={props.allActivated ? "Activate All" : "Decommision All"}
        onClick={props.handleButtonClick}
      />
    </Segment>
  )
}

export default LogPanel
