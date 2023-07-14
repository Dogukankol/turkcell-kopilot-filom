"use client"
import React, {useState} from 'react'


import { useSelector } from 'react-redux'
import { modalName, isVisible } from '@/stores/modal/modalSlice'

function Modals({ children, className, setIsOpen }) {
    const isVisibleC = useSelector(isVisible);
    const modalNameC = useSelector(modalName);


    return (
        <div className={`modal ${className ? className : ""} ${setIsOpen ? "modal__show" : ""}`}>
            <div className='modal__mask'></div>
            <div className='modal__content'>
            {children}
            </div>
        </div>
    )
}

function ModalHeader({ children }) {
    return (
        <div className='modal__header'>{children}</div>
    )
}

function ModalBody({ children }) {
    return (
        <div className='modal__body'>{children}</div>
    )
}

function ModalFooter({ children }) {
    return (
        <div className='modal__footer'>{children}</div>
    )
}

export { Modals, ModalHeader, ModalBody, ModalFooter };