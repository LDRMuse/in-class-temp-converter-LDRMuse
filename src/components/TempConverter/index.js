import React, { Fragment } from "react"

import { Input } from "./Input"
import tempConverter from 'lib'

export class TempConverter extends React.Component {

  state = {
    celsius: 0,
    fahrenheit: 0
  }

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
  if (target.id === 'celsius') {
    this.setState({
      celsius: Number(target.value),
      fahrenheit: tempConverter(target.value, "toFahrenheit") })
  } else {
  this.setState({
    fahrenheit: Number(target.value),
    celsius: tempConverter(target.value, "toCelsius")

  })
  }
}

  renderInputs = () =>
    this.inputs.map(({id, label}) => <Input label={label} id={id} handler={this.inputHandler} value={this.state[id]} key={id} />)

  render() {
    return (
      this.renderInputs()
    )
  }
}
