import React from 'react'
import { Button, Accordion, Box2 } from '@/components'
import { SSSITEMS, INFORMATIONLIST } from './data'

function index() {
    return (
        <section className="information">
            <div className="container">
                <div className="information__left">
                    <h2>Bilgi</h2>
                    <div className="box__list">
                        {
                            INFORMATIONLIST.map((item, index) => (
                                <Box2 key={index} {...item} className="box__gradient box__gradient--white" />
                            ))
                        }
                    </div>


                </div>
                <div className="information__right">
                    <h2>Sıkça Sorulan Sorular</h2>
                    <div className="information__right__sss">
                    {
                            SSSITEMS.map((item, index) => (
                                <Accordion key={index} {...item}  />
                            ))
                        }
                    </div>
                    <div className="buttons">
                        <Button text="Tümü" secondary={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index