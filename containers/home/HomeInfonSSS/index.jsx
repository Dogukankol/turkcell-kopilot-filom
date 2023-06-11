import React from 'react'
import { Button, Accordion, Box2 } from '@/components'
import { SSSITEMS, INFORMATIONLIST } from './data'
import "./HomeInfonSSS.scss"

function index() {
    return (
        <section class="information">
            <div class="container">
                <div class="information__left">
                    <h2>Bilgi</h2>
                    <div class="box__list">
                        {
                            INFORMATIONLIST.map((item, index) => (
                                <Box2 key={index} {...item} extClass="box__gradient box__gradient--white" />
                            ))
                        }
                    </div>


                </div>
                <div class="information__right">
                    <h2>Sıkça Sorulan Sorular</h2>
                    <div class="information__right__sss">
                    {
                            SSSITEMS.map((item, index) => (
                                <Accordion key={index} {...item}  />
                            ))
                        }
                    </div>
                    <div class="buttons">
                        <Button text="Tümü" secondary={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index