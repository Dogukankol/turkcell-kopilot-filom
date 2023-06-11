import React from 'react'
import {WHYCOPILOT} from './data'
import {Box2, Button} from '@/components'
import "./whyCoPilot.scss"

function index() {
    return (

        <section className="why-copilot">
            <div className="container">
                <h2>Neden Kopilot Filom?</h2>
                <div className="box__list">
                    {
                        WHYCOPILOT.map((item, index) => (
                            <Box2 key={index} {...item} />
                        ))
                    }
                </div>
                <div className="buttons">
                    <Button  text="Hemen Başvur" />
                </div>
            </div>
        </section>
    )
}

export default index