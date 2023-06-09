import React from 'react'
import Image from 'next/image'
function Box1({ image, head, text, extClass = "default", folderName = "products", fileExtension="webp" }) {
    return (
        <div className="box__{{class}}">
            <figure>
                <Image src={`../assets/images/${folderName}/${image}.${fileExtension}`} alt="{{head}}" />
            </figure>
            <h3>{{ head }}</h3>
            <p>{{ text }}</p>
        </div>
    )
}

export default Box1