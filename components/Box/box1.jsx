import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Box1({ href="#", image, head, text, className = "default", folderName = "products", fileExtension="webp" }) {
    return (
        <Link href={href}  className={`box__${className}`}>
            <figure>
                <Image src={image} alt={head} fill />
            </figure>
            <h3>{ head }</h3>
            <p>{ text }</p>
        </Link>
    )
}

export default Box1