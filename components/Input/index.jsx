/* eslint-disable */

import React from 'react';

function Input({ label, register, name, required, className, type = "text", icon, id, buttonClass, errorMessage, errors, ...props }) {
    return (
        <>
            <div {...id ? id = { id } : ""}
                className={`input ${className ? className : ""} ${icon ? "input--icon" : ""}`}>
                <input type={type} placeholder={label} {...register(name, { required })} {...props} />
                <label htmlFor={name}>{label}</label>
                <i className="icon-alert"></i>
                {icon && <button type="button" class={`input__icon ${buttonClass}`}>
                    <i class={icon}></i>
                </button>
                }
            </div>
        </>
    )
}

export default Input