import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'


//functional component
export const Input = (props) => (
  <div>
    <label> </label>
    <input placeholder={props.label} id={props.id} />
  </div>
  )

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

