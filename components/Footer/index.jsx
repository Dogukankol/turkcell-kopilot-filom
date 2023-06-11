import React from 'react'
import { Logo } from '@/components'
import "./footer.scss"

function index() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <h2>Diğer teknik destek sorularınız için</h2>

                    <div className="footer__contact">
                        <a href="mailto:destech@turkcell.com.tr">
                            <i className="icon-mail"></i> destech@turkcell.com.tr
                        </a>
                        <a href="tel:05327575757">
                            <i className="icon-telephone"></i> 0(532) 757 57 57
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__lower">
                <div className="container">
                    <div className="footer__logo">
                        <Logo />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default index