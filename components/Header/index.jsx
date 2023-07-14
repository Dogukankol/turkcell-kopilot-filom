"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Logo} from '@/components/'
import fastLogin from '/assets/images/logos/fast-login-2x.png'

import { useSelector, useDispatch } from 'react-redux'
import { headerTheme } from '@/stores/header/headerSlice'


function Header() {
    const isDark = useSelector(headerTheme);

    return (
        <header className={`header ${isDark ? "header--dark" : ""}`}>
            <div className="container">
                <div className="header__logo">
                    <Link href="/" target="_self">
                        <Logo />                        
                    </Link>
                </div>
                <div className="header__language">
                    {/* {{
                        Select.item(
                            options = languageList
                        )
                    }} */}
                </div>
                <div className="header__fast-login">
                    <Link href="/" target="_self" className="btn--fast-login">
                        <Image alt="Fast Login" src={fastLogin} width={116} height={25} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header