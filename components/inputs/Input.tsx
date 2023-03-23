import React, { FC, InputHTMLAttributes, SetStateAction, useState } from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { RegisterOptions } from "react-hook-form";

interface props extends InputHTMLAttributes<HTMLInputElement> { label: string; type: string; icons: string; }

const Input: React.FC<props> = ({ label, type, icons }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    }

    return (
        <div className='flex flex-col'>
            <label className='font-montserrat text-dark-green mb-2'>{label}</label>
            <div className='flex flex-row'>
            <input type={type} value={value} onChange={handleChange}
                className="bg-brown/25 rounded-l-lg py-1 pl-3 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica" placeholder={type}
            />
            <div className='bg-brown/25 rounded-r-lg flex justify-center items-center pr-2 py-1'>
                <FaMailBulk className='w-4 h-4 text-dark-green' />
            </div>
            </div>
        </div>
    );
}

export default Input;