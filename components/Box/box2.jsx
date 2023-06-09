import React from 'react'

function Box2({extclassName="box__gradient", classWrap="box__gradient", icon, head, desc, element="div ", attr}) {
  return (
    <div { ...attr ? attr : ""} className={`${classWrap}--wrap`}>
        <div className={`${extClass}`}>
            {icon ? <i className="{icon}"></i> : ""}
            {head ? <h3>{head}</h3> : ""}
            {desc ? <p>{desc}</p> : ""}
        </div>
    </div>
  )
}

export default Box2