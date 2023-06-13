import React from 'react'

function InstructionBox({head, desc}) {
  return (
    <div className="instruction__list__item">
        <h3>{head}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default InstructionBox