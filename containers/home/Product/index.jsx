"use client"
import React from 'react'
import { Tabs, TabSwitcher, TabContent, Button, Box1 } from "@/components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { PRODUCT } from './data'


function index() {
    return (
        <section className="product">
            <div className="container">
                <h2>Ürünlerimiz</h2>

                <Tabs>
                    <div className="tabs__head">
                        <TabSwitcher tabId={0}>
                            Takip Cihazları
                        </TabSwitcher>
                        <TabSwitcher tabId={1}>
                            Aksesuarlar
                        </TabSwitcher>
                    </div>
                    <div className="tabs__content">
                        <TabContent id={0}>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={3}
                                navigation
                            >
                                {
                                    PRODUCT.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Box1 {...item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </TabContent>
                        <TabContent id={1}>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={3}
                                navigation
                            >
                                {
                                    PRODUCT.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Box1 {...item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </TabContent>
                    </div>
                </Tabs>
                <div className="buttons buttons-m--reverse">
                    <Button text="Detaylı İncele" secondary="true" />
                    <Button text="Servis Noktalarını Gör" />
                </div>
            </div>
        </section>
    )
}

export default index