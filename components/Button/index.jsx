import React from 'react'
import styles from "./button.scss"
import Link from 'next/link'

function Button({ text, extClass, href, attr, disabled, secondary, tertiary, icon, buttonType="button" }) {
    return (
        <>
            {href ?
                <Link href={`${href}`} className={`button ${secondary ? "button--secondary" : ""} ${extClass}`}
                    {...disabled ? disabled : ""}
                    {...attr}>
                    <span>{text} </span>{icon ? `<i className=${`${icon}`}></i>` : ""}
                </Link>
                :
                <button type={buttonType} className={`button ${secondary ? "button--secondary" : ""}`}
                    {...disabled ? disabled : ""}
                    {...attr}>
                    <span>{text} </span> {icon ? `<i className=${`${icon}`}></i>` : ""}
                </button>
            }
        </>
    )
}

export default Button