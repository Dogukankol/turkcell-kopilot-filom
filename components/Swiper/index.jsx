"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

function SwiperComponent({ children, ...attrs }) {
    return (
        <Swiper
            {...attrs}
        >
            {children}
        </Swiper>
    )
}

export default Swiper