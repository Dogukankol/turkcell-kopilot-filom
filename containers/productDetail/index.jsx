"use client"
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import Image from 'next/image'

import { setHeaderTheme } from "@/stores/header/headerSlice";

const productDetail = ({ title, description, images }) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setHeaderTheme(true))
    }, [dispatch])


    return (
        <div className="detail detail-product">
            <div className='container'>
                <figure>
                    <Image src={images[0]} alt={title} fill />
                </figure>
                <h1>{title}</h1>
                {description}
            </div>
        </div>
    )
}

export default productDetail