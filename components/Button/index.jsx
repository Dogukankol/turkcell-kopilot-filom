"use client"
import React from 'react'
import Link from 'next/link'


function Button({ text, className, href, disabled, secondary, tertiary, icon, type="button", children, ...props }) {
    return (
        <>
            {href ?
                <Link href={`${href}`} className={`button ${secondary ? "button__secondary" : ""} ${className}`}
                    {...disabled ? disabled : ""}
                    {...props}>
                    <span>{text} </span>{icon ? `<i className=${`${icon}`}></i>` : ""}
                </Link>
                :
                <button type={type} className={`button ${secondary ? "button__secondary" : ""} ${className ? className : ""}`}
                    {...disabled ? disabled : ""}
                    {...props}>
                    <span>{text}{children}</span> {icon ? `<i className=${`${icon}`}></i>` : ""}
                </button>
            }
        </>
    )
}

export default Button