"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Box1 } from '@/components'

function Slider({object}) {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
        >
            {
                object.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box1 {...item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Slider