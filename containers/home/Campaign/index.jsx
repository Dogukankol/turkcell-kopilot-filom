"use client"
import React from 'react';
import { Button, Box1 } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { CAMPAIGN } from './data';

function index() {
    return (
        <section className="campaign">
            <div className="container">
                <h2>Size Özel Fırsatlarımız</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                >
                    {
                        CAMPAIGN.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box1 {...item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="buttons">
                    <Button text="Hemen Başvur" secondary={true} />
                </div>
            </div>
        </section>
    )
}

export default index