/* eslint-disable */
"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Modals, ModalHeader, ModalBody, Input, CustomSelect, CustomCreatableSelect, Button, Error } from '@/components/'
import servicePointsJson from './ServicePoints.json';
import { useForm, Controller } from "react-hook-form";

const servicePoint = ({ visible }) =>{
    const [formData, setFormData] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [townValue, setTownValue] = useState("");
    const [plateCarsValue, setPlateCarsValue] = useState("");
    const [cities, setCities] = useState(servicePointsJson.cities);
    const [towns, setTowns] = useState("");

    const inputRef = useRef(null);

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    
    useEffect(() => {
        setTowns(cityValue.districts)
    }, [cityValue]);

    useEffect(() => {
        console.log(formData)
    }, [formData])

    function getCreatableSelectData(childData){
        setPlateCarsValue(childData);
    }

    const onSubmit = (data) => {
        setFormData({...data, cityValue, townValue,  plateCarsValue});
        reset();
    }

    return (
        <>
        <Modals visible={visible}>
            <ModalHeader>
                <h3>Servis Noktaları 3</h3>
                <p>Turkcell Kopilot Filom ürünleri için servis hizmet noktalarını aşağıdan görüntüleyebilirsiniz.</p>
            </ModalHeader>
            <ModalBody>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__group">
                        <div className='form__group--column'>
                            <CustomSelect
                                options={cities}
                                value={cityValue}
                                onChange={setCityValue}
                                getOptionLabel={(option) => option.city}
                                getOptionValue={(option) => option.city}
                                textFieldProps={{
                                    label: 'Label',
                                    InputLabelProps: {
                                        shrink: true,
                                    },
                                }}
                            />
                        </div>
                        <div className='form__group--column'>
                            <CustomSelect
                                options={towns}
                                value={townValue}
                                onChange={setTownValue}
                                getOptionLabel={(option) => option.district}
                                getOptionValue={(option) => option.district} />
                        </div>
                    </div>

                    <div className='form__group'>
                        <div className='form__group--column'>
                            <Input label="Firmanızın Adı" name="companyName" defaultValue="GoyGoy" register={register} required />
                            {errors.companyName && <Error text="Bu alan zorunludur." />}

                        </div>
                        <div className='form__group--column'>
                            <Input label="Ad Soyad" name="fullname" defaultValue="Doğukan Kol" register={register} required />
                            {errors.fullname && <Error text="Bu alan zorunludur." />}
                        </div>
                    </div>

                    <div className='form__group'>
                        <div className='form__group--column'>
                            <Input label="Telefon Numarası" type="tel" name="telephone" defaultValue="05370462962" register={register} required />
                            {errors.telephone && <Error text="Bu alan zorunludur." />}
                        </div>
                        <div className='form__group--column'>
                            <Input label="E-Posta" type="email" name="email" defaultValue="dogukankol@gmail.com" register={register} required />
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

                    <Button type="submit" text="Sorgula"></Button>
                </form>
            </ModalBody>
        </Modals></>
    )
}

export default servicePoint