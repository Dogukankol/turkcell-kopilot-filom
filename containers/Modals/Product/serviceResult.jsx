/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { Modals, ModalHeader, ModalBody, ModalButton, Infobox, ResultItem, ResultItemContactBox, Button } from '@/components/'
import { servicePointList } from '@/stores/servicePoint/servicePointSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setModalVisible } from '@/stores/modal/modalSlice'
import { setSelectedServicePoint } from '@/stores/servicePoint/servicePointSlice'


function serviceResult({ visible }) {
    const dispatch = useDispatch();
    const formData = useSelector(servicePointList);

    const handleBackForm = (args) => {
        dispatch(setModalVisible({ modal: "service-result", visible: false }))
        setTimeout(() => {
            dispatch(setModalVisible({ modal: "service-point", visible: true }))
        }, 100);
    }

    const handleSelectService = (item) => {
        dispatch(setModalVisible({ modal: "service-result", visible: false }))
        dispatch(setSelectedServicePoint({ ...item}))
        setTimeout(() => {
            dispatch(setModalVisible({ modal: "service-cong", visible: true }))
        }, 100);
    }

    return (
        <>
            <Modals visible={visible} className="modal-service">
                <ModalHeader>
                    <h3>Servis Noktaları</h3>
                    <p>Turkcell Kopilot Filom ürünleri için servis hizmet noktalarını aşağıdan görüntüleyebilirsiniz.</p>
                </ModalHeader>
                <ModalBody>
                    <div className="modal-service__criteria">
                        <div>
                            <h4>Arama Kriterleri</h4>
                            {formData && <p>{formData.city}, {formData.towns.district} - {formData.companyName} - {formData.vehicleCount} Araç</p>}
                        </div>
                        <Button text="Tekrar Ara" secondary onClick={handleBackForm} />
                    </div>
                    <hr />

                    <div className="modal-service__results">
                        <h4>Sonuçlar</h4>
                        <Infobox text="Randevu oluşturmak için seçtiğiniz Servis Noktası’nı lütfen arayın." icon="icon-info" />
                        <div className="box">
                            {formData &&
                                formData.towns.services.map((item, key) => (
                                    <ResultItem key={key} title={item.name} address={item.address}>
                                        <>
                                        <div className='result-item__contact'>
                                            <ResultItemContactBox fullname={item.name} telephone={item.person} />
                                        </div>
                                        <Button onClick={() => handleSelectService(item)}  text="Seç" className="ml-auto" />
                                        </>

                                    </ResultItem>
                                ))
                            }
                        </div>

                    </div>
                </ModalBody>
            </Modals>
        </>
    )
}

export default serviceResult