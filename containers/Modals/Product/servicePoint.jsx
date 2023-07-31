/* eslint-disable */
"use client"
import React, { useState, useEffect, useRef, Component } from 'react'
import { Modals, ModalHeader, ModalBody, Input, CustomSelect, CustomCreatableSelect, Button, Error, ModalButton } from '@/components/'
import ModalC from '../index'
import servicePointsJson from './ServicePoints.json';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';

import { setFormData } from '@/stores/servicePoint/servicePointSlice'
import { setModalVisible } from '@/stores/modal/modalSlice'


const servicePoint = ({ visible, onClose, ...props }) => {
    // const [formData, setFormData] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [townValue, setTownValue] = useState("");
    const [plateCarsValue, setPlateCarsValue] = useState("");

    const [cities, setCities] = useState(servicePointsJson.cities);
    const [towns, setTowns] = useState("");

    const inputRef = useRef(null);
    const dispatch = useDispatch();


    const { register, reset, handleSubmit, watch, formState: { errors }, control } = useForm();

    useEffect(() => {
        setTowns(cityValue.districts);
    }, [cityValue]);

    function getCreatableSelectData(childData) {
        setPlateCarsValue(childData);
    }

    const onSubmit = (data) => {
        dispatch(setFormData({ ...data, plateCarsValue }));
        dispatch(setModalVisible({ modal: "service-point", visible: false }))
        setTimeout(() => {
            dispatch(setModalVisible({ modal: "service-result", visible: true }))
        }, 100);

        reset();
    }

    return (
        <>
            <Modals visible={visible}
                {...props}>
                <ModalHeader>
                    <h3>Servis Noktaları</h3>
                    <p>Turkcell Kopilot Filom ürünleri için servis hizmet noktalarını aşağıdan görüntüleyebilirsiniz.</p>
                </ModalHeader>
                <ModalBody>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__group">
                            <div className='form__group--column'>
                                <Controller
                                    control={control}
                                    name="city"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, value, ref, name } }) => (
                                        <CustomSelect
                                            options={cities}
                                            value={cityValue}
                                            onChange={val => {
                                                onChange(val.city);
                                                setCityValue(val);
                                            }}
                                            getOptionLabel={(option) => option.city}
                                            getOptionValue={(option) => option.city}
                                        />
                                    )}
                                />
                                {errors.city && <Error text="Bu alan zorunludur." />}

                            </div>
                            <div className='form__group--column'>                                    
                                <Controller
                                    control={control}
                                    name="town"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, value, ref, name } }) => (
                                        <CustomSelect
                                            options={towns}
                                            value={townValue}
                                            onChange={val => {
                                                onChange(val);
                                                setTownValue(val);
                                            }}
                                            getOptionLabel={(option) => option.district}
                                            getOptionValue={(option) => option.district}
                                        />
                                    )}
                                />
                                {errors.town && <Error text="Bu alan zorunludur." />}

                            </div>
                        </div>

                        <div className='form__group'>
                            <div className='form__group--column'>
                                <Input label="Firmanızın Adı" name="companyName" register={register} required />
                                {errors.companyName && <Error text="Bu alan zorunludur." />}

                            </div>
                            <div className='form__group--column'>
                                <Input label="Ad Soyad" name="fullname" register={register} required />
                                {errors.fullname && <Error text="Bu alan zorunludur." />}
                            </div>
                        </div>

                        <div className='form__group'>
                            <div className='form__group--column'>
                                <Input label="Telefon Numarası" type="tel" name="telephone" register={register} required />
                                {errors.telephone && <Error text="Bu alan zorunludur." />}
                            </div>
                            <div className='form__group--column'>
                                <Input label="E-Posta" type="email" name="email" register={register} required />
                                {errors.email && <Error text="Bu alan zorunludur." />}
                            </div>
                        </div>

                        <div className='form__group form__group--single'>
                            <Input label="Araç Sayısı" name="vehicleCount" defaultValue="5" register={register} required />
                            {errors.vehicleCount && <Error text="Bu alan zorunludur." />}
                        </div>


                        <div className='form__group form__group--single'>
                            <CustomCreatableSelect parentCallBack={getCreatableSelectData} />
                        </div>

                        <Button type="submit" text="Sorgula" />
                    </form>
                </ModalBody>
            </Modals></>
    )
}

export default servicePoint