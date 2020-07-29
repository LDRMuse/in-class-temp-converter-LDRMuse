import React from 'react'
import PropTypes from 'prop-types'

//functional component
export const Input = (props) => (
  <div>
    <label>{props.label}</label>
    <input id={props.id} />
  </div>
  )

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

