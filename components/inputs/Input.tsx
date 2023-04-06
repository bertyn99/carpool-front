import React, { FC, InputHTMLAttributes, SetStateAction, useState } from 'react';
import { FaRegEnvelope, FaEye } from 'react-icons/fa';

interface props extends InputHTMLAttributes<HTMLInputElement> { label: string; type: string; icon: string; }

const Input: React.FC<props> = ({ label, type, icon }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    }

    const Icons = ({ name }: { name: string }) => {
        if (name === "") {
            return (
                <></>
            );
        } else if (name == "Email") {
            return (
                <FaRegEnvelope />
            );
        } else if (name == "Password") {
            return (
                <FaEye />
            );
        }
        return null
    }

    return (
        <div className='flex flex-col'>
            <label className='font-montserrat text-dark-green mb-2'>{label}</label>
            <div className='flex flex-row'>
                <input type={type} value={value} onChange={handleChange}
                    className="bg-brown/25 rounded-l-lg py-1 pl-3 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica" placeholder={type}
                />
                <div className='bg-brown/25 rounded-r-lg flex justify-center items-center pr-3 py-1'>
                    <Icons name={icon} />
                </div>
            </div>
        </div>
    );
}

export default Input;