import React from 'react'
import Image from 'next/image'
import logoImg from '@/assets/images/logos/logo-2x.png'

function Logo() {
    return (
        <figure className="logo">
            <Image alt="Turkcell Logo" src={logoImg} fill />
            <figcaption>Turkcell Kopilot Filom</figcaption>
        </figure>
    )
}

export default Logo