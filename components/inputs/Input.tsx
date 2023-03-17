import React, { FC, InputHTMLAttributes, SetStateAction, useState } from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { RegisterOptions } from "react-hook-form";

interface props extends InputHTMLAttributes<HTMLInputElement> { type: string; icons: string; }

const Input: React.FC<props> = ({ type, icons }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    }

    return (
        <div className='flex flex-row'>
            <label className='font-montserrat text-dark-green'>Email</label>
            <input type={type} value={value} onChange={handleChange}
                className="bg-brown/25 rounded-l-lg py-1 pl-3 text-dark-green/25 font-medium focus:ring-0" placeholder={type}
            />
            <div className='bg-brown/25 rounded-r-lg flex justify-center items-center pr-2 py-1'>
                <FaMailBulk className='w-4 h-4 text-dark-green' />
            </div>
        </div>
    );
}

export default Input;