import React, { Fragment } from "react"

import { Input } from "./Input"

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

  renderInputs = () => this.inputs.map(({id, label}) => <Input label={label} id={id} key={id} />)

  render() {
    return (
      this.renderInputs()
    )
  }
}
