import React, { Fragment } from "react"

import { Input } from "./Input"
import tempConverter from 'lib'

export class TempConverter extends React.Component {
  inputs = [
    {
      label: "°C",
      id: "celsius"
    },
    {
      label: "°F",
      id: "fahrenheit"
    }
  ]

  inputHandler = ({target}) => {
    // TODO: Look at other props of the target to determine whether we need to convert C or F
  }

  renderInputs = () =>
    this.inputs.map(({id, label}) => <Input label={label} id={id} handler={this.inputHandler} key={id} />)

  render() {
    return (
      this.renderInputs()
    )
  }
}
