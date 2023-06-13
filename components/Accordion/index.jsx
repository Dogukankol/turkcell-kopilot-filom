"use client"
import React, { useState, useEffect } from 'react'

function Accordion({title, desc}) {
    const [accordionOpener, setAccordionOpener] = useState(false)

    function handleClick(e) {
        setAccordionOpener(!accordionOpener)
    }


    return (
        <div className={`accordion__item ${accordionOpener ? "active" : ""}`} onClick={handleClick}>
            <div className="accordion__item-header">
                <p>{title}</p>
                <i className="icon-arrow"></i>
            </div>
            <p className="accordion__item-body">
                {desc}
            </p>
        </div>
    )
}

export default Accordion