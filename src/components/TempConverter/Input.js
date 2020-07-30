import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'


//functional component
export const Input = ({label, id, handler, value}) => {
  const handleChange = (event) => {
    handler(event)
  }
  return <div>
    <label>{label}</label>
    <input placeholder={label} id={id} onChange={handleChange} value={value}/>
  </div>
}

Input.propTypes = {
  handler: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number
}

