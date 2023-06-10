import React from 'react'
import Image from 'next/image'
import './box.scss'

function Box1({ image, head, text, extClass = "default", folderName = "products", fileExtension="webp" }) {
    return (
        <div className={`box__${extClass}`}>
            <figure>
                <Image src={image} alt={head} fill />
            </figure>
            <h3>{ head }</h3>
            <p>{ text }</p>
        </div>
    )
}

export default Box1