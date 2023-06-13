import React from 'react'
import {HOWTOWORKLIST} from './data'
import {InstructionBox} from '@/components'

function howToWorkList() {
    return (
        <section className="how-to-work">
            <div className="container">
                <h2>Nasıl Çalışır?</h2>
                <div className="instruction__list">
                    {
                        HOWTOWORKLIST.map((item, index) => (
                            <InstructionBox key={index} head={item.head} desc={item.desc} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default howToWorkList