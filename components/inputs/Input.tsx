'use client';

import React, { FC, InputHTMLAttributes, SetStateAction, useState, forwardRef, useEffect } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FaRegEnvelope, FaEye } from 'react-icons/fa';

interface props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    icon?: string;
    required?: undefined | boolean;
    placeholder?: string;
    style?: string;
    onChange?: (event: any) => void;
    value?: string;
}

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, props>(({ label, type, icon, placeholder, style, onChange, value }, ref) => {

    const Icons = ({ name }: { name: string }) => {
        if (name === "") {
            return (
                <FaRegEnvelope fillOpacity="0%" size={20} />
            );
        } else if (name == "Email") {
            return (
                <FaRegEnvelope fill="text-dark-green" size={20} />
            );
        } else if (name == "Password") {
            return (
                <FaEye fill="text-dark-green" size={20} />
            );
        }
        return null
    }

    let patternArray = [{
        'text': '[a-z0-9]{1,15}',
        'email': '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    }]

    useEffect(() => {
        console.log(value);
    }, [value])

    return (
        <div className='flex flex-col mb-8'>
            <label className='font-montserrat text-xl text-dark-green mb-4'>{label}</label>
            <div className='flex flex-row'>
                <input type={type} value={value} ref={ref}
                    className={style != undefined ? style + " bg-brown/25 rounded-l-lg py-2 px-5 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica text-xl"
                        : "bg-brown/25 rounded-l-lg py-2 px-5 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica text-xl"}
                    placeholder={placeholder || type}
                    pattern={type === "email" ? patternArray[0].email : patternArray[0].text}
                    onChange={onChange}
                />
                <div className='bg-brown/25 rounded-r-lg flex justify-center items-center pr-3 py-1 pl-3'>
                    <Icons name={icon} />
                </div>
            </div>
        </div>
    );
})

export default Input;