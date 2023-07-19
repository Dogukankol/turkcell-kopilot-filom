"use client"
import React, { useState, useEffect, Component } from 'react'
import ServicePoint from './Product/servicePoint';
import ServicePoint1 from './Product/servicePoint1';
import ServicePoint2 from './Product/servicePoint2';
import { setModalVisible, modalStatusState } from '@/stores/modal/modalSlice'
import { useSelector, useDispatch } from 'react-redux';
import servicePoint from './Product/servicePoint';


const Modals = () => {
        const modalListC = {
                'service-point-1': { component: ServicePoint },
                'service-point-2': { component: ServicePoint1 },
                'service-point-3': { component: ServicePoint2 },
        }
        const modalStatus = useSelector(modalStatusState);
        const dispatch = useDispatch();
        const [modalList, setModalList] = useState(modalListC);
        useEffect(() => {
                if (modalStatus) {
                        console.log(modalStatus)
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

        return (
                <>
                        {Object.keys(modalList).map((key, i) => {
                                const item = modalList[key];
                                return <RenderComponent component={item.component} {...item.props} visible={item?.visible} key={i}
                                        modalName={key} />
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

Modals.open = open;
Modals.close = close;

export default Modals