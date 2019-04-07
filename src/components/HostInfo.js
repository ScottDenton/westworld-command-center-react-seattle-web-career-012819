import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  state = {
    options: [{key: "some_area", text: "Some Area", value: "some_area"}, {key: "another_area", text: "Another Area", value: "another_area"}],
    value: "some_area",
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }



  handleChange = (e, {value}) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = (id) => {
    this.props.toggleActive(this.props.host.id)
    ;
  }

  render(){
    const host = this.props.host
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={ host.imageUrl }
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {host.firstName} | { host.gender ==='Male' ? <Icon name='man' /> : <Icon name='woman' />}

              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={!host.active ? "Decommissioned" : "Active"}
                  checked={!host.active ? false : true}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.state.value}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
