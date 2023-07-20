import React from 'react'

function ResultItem({ title, address, children }) {
  return (
    <div className="result-item">
      <h5>{title}</h5>
      <p>{address}</p>

      {children}
    </div>
  )
}

function ResultItemContactBox({ fullname, telephone }) {
  return (
    <div className="result-item__contact-info">
      <p>{fullname}</p>
      <p>{telephone}</p>
    </div>
  )
}

export { ResultItem, ResultItemContactBox }