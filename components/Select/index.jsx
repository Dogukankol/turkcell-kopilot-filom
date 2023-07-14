"use client"
import React from 'react'
import Select from 'react-select'

function CustomSelect({options, ...props}) {
  return (
  <Select options={options} {...props} />
  )
}

export default CustomSelect