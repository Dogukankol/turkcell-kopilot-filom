/* eslint-disable */
"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Modals, ModalHeader, ModalBody, ModalFooter, Input, CustomSelect } from '@/components/'
import servicePointsJson from './ServicePoints.json';
import { useForm } from "react-hook-form";

function servicePoint() {
    const [cityValue, setCityValue] = useState("");
    const [townValue, setTownValue] = useState("");
    const [cities, setCities] = useState(servicePointsJson.cities);
    const [towns, setTowns] = useState("");

    const inputRef = useRef(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data)

  console.log(watch("example"))


    useEffect(() => {
        setTowns(cityValue.districts)
    }, [cityValue])


    return (
        <><Modals setIsOpen={true}>
            <ModalHeader>
                <h3>Servis Noktaları</h3>
                <p>Turkcell Kopilot Filom ürünleri için servis hizmet noktalarını aşağıdan görüntüleyebilirsiniz.</p>
            </ModalHeader>
            <ModalBody>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__group">
                        <CustomSelect
                            options={cities}
                            value={cityValue}
                            onChange={setCityValue}
                            getOptionLabel={(option) => option.city}
                            getOptionValue={(option) => option.city}
                        />

                        <CustomSelect
                            options={towns}
                            value={townValue}
                            onChange={setTownValue}
                            getOptionLabel={(option) => option.district}
                            getOptionValue={(option) => option.district} />


                        <Input label="Firmanızın Adı" name="companyName"  register={register} />
                        <Input label="Ad Soyad" name="fullname" register={register} />
                        <Input label="Telefon Numarası" type="tel" name="telephone" register={register} />
                        <Input label="E-Posta" type="email" name="email" register={register} />
                        <Input label="Araç Sayısı" name="vehicleCount" register={register} />
                    </div>

                    <input type="submit" />
                </form>
            </ModalBody>
            <ModalFooter>
                Modal Adana
            </ModalFooter>
        </Modals></>
    )
}

export default servicePoint