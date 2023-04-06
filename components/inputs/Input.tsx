'use client';

import React, { FC, InputHTMLAttributes, SetStateAction, useState, forwardRef } from 'react';
import { FaRegEnvelope, FaEye } from 'react-icons/fa';

interface props extends InputHTMLAttributes<HTMLInputElement> { label: string; type: string; icon: string; required: undefined | boolean; }

export type Ref = HTMLInputElement;

const Input: React.FC<props> = forwardRef<Ref, props>(({ label, type, icon, value, onChange }, ref) => {

    const Icons = ({ name }: { name: string }) => {
        if (name === "") {
            return (
                <FaRegEnvelope fill-opacity="0%" />
            );
        } else if (name == "Email") {
            return (
                <FaRegEnvelope fill="text-dark-green" />
            );
        } else if (name == "Password") {
            return (
                <FaEye fill="text-dark-green" />
            );
        }

        return null
    }

    let pattern = [{
        'text': '[a-z0-9]{1,15}',
        'email': '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    }]

    return (
        <div className='flex flex-col mb-8'>
            <label className='font-montserrat text-dark-green mb-4'>{label}</label>
            <div className='flex flex-row'>
                <input type={type} value={value} onChange={onChange} ref={ref}
                    className="bg-brown/25 rounded-l-lg py-1 pl-3 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica"
                    placeholder={type}
                    pattern={type = "email" ? pattern[0].email : pattern[0].text}
                    required
                />
                <div className='bg-brown/25 rounded-r-lg flex justify-center items-center pr-3 py-1 pl-3'>
                    <Icons name={icon} />
                </div>
            </div>
        </div>
    );
})

export default Input;