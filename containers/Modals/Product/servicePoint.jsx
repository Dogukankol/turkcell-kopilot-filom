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

    const dispatch = useDispatch();


    const { register, reset, handleSubmit, watch, formState: { errors }, control } = useForm();

    useEffect(() => {
        setTowns(cityValue.districts);
    }, [cityValue]);

    function getCreatableSelectData(childData) {
        setPlateCarsValue(childData);
    }

    const onSubmit = (data) => {
        console.log(data)
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
                    <h3>Servis Noktaları AA</h3>
                    <p>Turkcell Kopilot Filom ürünleri için servis hizmet noktalarını aşağıdan görüntüleyebilirsiniz.</p>
                </ModalHeader>
                <ModalBody>
                    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
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
                                            name="city" inputId="city"
                                            placeholder={<label htmlFor="city">Şehir Seçiniz</label>}
                                        />
                                    )}
                                />
                                {errors.city && <Error text="Bu alan zorunludur." />}

                            </div>
                            <div className='form__group--column' aria-label="towns">
                                <Controller
                                    control={control}
                                    name="towns"
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
                                                console.log(val)
                                            }}
                                            getOptionLabel={(option) => option.district}
                                            getOptionValue={(option) => option.district}
                                            name="towns" inputId="towns"
                                            placeholder={<label htmlFor='towns'>İlçe Seçiniz</label>}
                                        />
                                    )}
                                />
                                {errors.town && <Error text="Bu alan zorunludur." />}

                            </div>
                        </div>

                        <div className='form__group'>
                            <div className='form__group--column'>
                                <Input label="Firmanızın Adı" name="companyName" register={register} required data-testid="companyName" />
                                {errors.companyName && <Error text="Bu alan zorunludur." />}

                            </div>
                            <div className='form__group--column'>
                                <Input label="Ad Soyad" name="fullname" register={register} required data-testid="fullname" />
                                {errors.fullname && <Error text="Bu alan zorunludur." />}
                            </div>
                        </div>

                        <div className='form__group'>
                            <div className='form__group--column'>
                                <Input label="Telefon Numarası" type="tel" name="telephone" register={register} required data-testid="telephone" />
                                {errors.telephone && <Error text="Bu alan zorunludur." />}
                            </div>
                            <div className='form__group--column'>
                                <Input label="E-Posta" type="email" name="email" register={register} required data-testid="email" />
                                {errors.email && <Error text="Bu alan zorunludur." />}
                            </div>
                        </div>

                        <div className='form__group form__group--single'>
                            <Input label="Araç Sayısı" name="vehicleCount"  register={register} required data-testid="vehicleCount" />
                            {errors.vehicleCount && <Error text="Bu alan zorunludur." />}
                        </div>


                        <div className='form__group form__group--single'>
                            <CustomCreatableSelect parentCallBack={getCreatableSelectData} name="plates" inputId="plates" placeholder={<label htmlFor='plates'>Plakaları Giriniz</label>} data-testid="plates" />
                        </div>

                        <Button type="submit" text="Sorgula" data-testid="send" />
                    </form>
                </ModalBody>
            </Modals></>
    )
}

export default servicePoint