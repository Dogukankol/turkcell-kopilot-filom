"use client"
import React, { useState, useEffect, Component } from 'react'
import ServicePoint from './Product/servicePoint';
import ServiceResult from './Product/serviceResult';
import ServiceCong from './Product/serviceCong';
import { setModalVisible, modalStatusState } from '@/stores/modal/modalSlice'
import { useSelector, useDispatch } from 'react-redux';

import { store } from '@/stores'


const ModalC = () => {
        const modalListC = {
                'service-point': { component: ServicePoint },
                'service-result': { component: ServiceResult },
                'service-cong': { component: ServiceCong },
        }
        const modalStatus = useSelector(modalStatusState);
        const dispatch = useDispatch();
        const [modalList, setModalList] = useState(modalListC);
        useEffect(() => {
                if (modalStatus) {
                        setModalList((prev) => {
                                prev[modalStatus.modal].visible = modalStatus.visible;
                                return { ...prev };
                        })

                }

        }, [modalStatus]);

        const RenderComponent = (props) => {
                const { component: Component, item, ...productProps } = props;
                return <Component {...props} />
        }

        const onClose = (key) => {
                dispatch(setModalVisible({ modal: key, visible: false }));
        }

        const modalOpen = (modalName, props = {}) => {
                dispatch(setModalVisible({ modal: modalName, visible: true }));
        }

        const modalClose = (modalName) => {
                dispatch(setModalVisible({ modal: modalName, visible: false }));
        }

        return (
                <>
                        {Object.keys(modalList).map((key, i) => {
                                const item = modalList[key];
                                return <RenderComponent component={item.component} {...item.props} visible={item?.visible} key={i}
                                        modalName={key} onClose={() => {
                                                onClose(key)
                                        }} />
                        })}
                </>
        );
};

function open(modalName, props = {}) {
        store.dispatch(setModalVisible({ modal: modalName, visible: true }));
}

function close(modalName) {
        store.dispatch(setModalVisible({ modal: modalName, visible: false }));
}

ModalC.open = open;
ModalC.close = close;


export default ModalC