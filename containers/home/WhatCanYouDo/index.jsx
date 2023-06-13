import React from 'react'
import { TABS } from './data'
import Image from 'next/image'
import { Tabs, TabSwitcher, TabContent, Button, Box1 } from "@/components";
import imageDesktopScreen from '@/assets/images/whycanyoudo/screen-1-2x.webp'
import imageMobileScreen from '@/assets/images/whycanyoudo/screen-1-m-2x.webp'
import imageDesktopDevice from '@/assets/images/device-2x.webp'
import imageMobileDevice from '@/assets/images/device-m-2x.webp'

function WhatCanYouDo() {
    return (

        <section className="map-area">
            <div className="container">
                <h2>Kopilot Filom’la Neler Yapabilirsiniz?</h2>
                <Tabs className="tabs--pill">
                    <div className="tabs__head">
                        {
                            TABS.map((item, index) => (
                                <TabSwitcher key={index} tabId={index}>
                                    {item.head}
                                </TabSwitcher>
                            ))
                        }
                <span id="tabs__head__glider"></span>

                    </div>
                    <div className="tabs__content">
                        {
                            TABS.map((item, index) => (
                                <TabContent key={index} id={index}>
                                    <picture className="map-area__map">
                                        <Image src={imageDesktopScreen} fill alt="City Image" className='desktop-show' />
                                        <Image src={imageMobileScreen} fill alt="City Image" className='mobile-show' />
                                    </picture>
                                </TabContent>
                            ))
                        }
                        
                    <div className="map-area__device">
                        <picture>
                            <Image src={imageDesktopDevice} fill alt="City Image" className='desktop-show' />
                            <Image src={imageMobileDevice} fill alt="City Image" className='mobile-show' />
                        </picture>
                    </div>
                    </div>

                </Tabs>
            </div>
        </section>
    )
}

export default WhatCanYouDo