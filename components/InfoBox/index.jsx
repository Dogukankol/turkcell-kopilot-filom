import React from 'react'

function InfoBox({className, icon, text}) {
  return (
    <p className={`infobox ${className? className: ""}`}><i className={icon}></i>{text}</p>

  )
}

export default InfoBox