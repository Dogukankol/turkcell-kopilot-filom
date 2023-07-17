"use client"
import React from 'react'
import Select, {components}  from 'react-select'

function CustomSelect({options, ...props}) {
  return (
  <Select className="select" options={options} {...props} classNamePrefix="select" />
  )
}


export default CustomSelect