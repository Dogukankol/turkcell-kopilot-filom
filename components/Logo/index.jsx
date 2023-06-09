import React from 'react'
import Image from 'next/image'
import "./logo.scss"
import logoImg from '@/assets/images/logos/logo-2x.png'

function Logo() {
    return (
        <figure className="logo">
            <Image alt="Turkcell Logo" src={logoImg} width={48} height={48} />
            <figcaption>Turkcell Kopilot Filom</figcaption>
        </figure>
    )
}

export default Logo