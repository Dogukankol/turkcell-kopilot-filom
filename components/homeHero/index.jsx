import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import imageDesktop from '@/assets/images/city-2x.webp'
import imageMobile from '@/assets/images/city-m-2x.webp'

function homeHero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__text">
                    <h1>Verimli, Güvenli<br />ve Tasarruflu<br />Filo Takip Sistemi</h1>
                    <p>Şirketinizin yeni çalışanı Kopilot Filom ile kolaylığın keyfini sürün!</p>
                    <Button text="Hemen Başvur" />
                </div>
                <div className="hero__city">
                    <div className='hero__city__picture desktop-show'>
                        <Image src={imageDesktop} fill alt="City Image" />
                    </div>
                    <div className='hero__city__picture mobile-show'>
                        <Image src={imageMobile} fill alt="City Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default homeHero