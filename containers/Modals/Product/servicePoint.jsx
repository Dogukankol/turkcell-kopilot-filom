/* eslint-disable */
"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Modals, ModalHeader, ModalBody, ModalFooter, Input, CustomSelect, CustomCreatableSelect, Button, Error } from '@/components/'
import servicePointsJson from './ServicePoints.json';
import { useForm } from "react-hook-form";

const servicePoint = ({ closeFn = () => null, open = false }) =>{
    const [formData, setFormData] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [townValue, setTownValue] = useState("");
    const [plateCarsValue, setPlateCarsValue] = useState("");
    const [cities, setCities] = useState(servicePointsJson.cities);
    const [towns, setTowns] = useState("");

    const inputRef = useRef(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setFormData({...data, cityValue, townValue,  plateCarsValue});
        setTimeout(() => {
            console.log(formData)
        }, 500)
    }
    useEffect(() => {
        setTowns(cityValue.districts)
    }, [cityValue]);


    return (
        <>
        <Modals open={true}>
            <ModalHeader>
                <h3>Servis Noktaları</h3>
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
                        <Input label="Araç Sayısı" name="vehicleCount" register={register} required />
                            {errors.vehicleCount && <Error text="Bu alan zorunludur." />}
                    </div>


                    <div className='form__group form__group--single'>
                        <CustomCreatableSelect />
                    </div>

                    <Button type="submit" text="Sorgula"></Button>
                </form>
            </ModalBody>
        </Modals></>
    )
}

export default servicePoint