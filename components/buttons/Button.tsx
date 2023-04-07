import React, { FC, InputHTMLAttributes } from 'react';

interface props extends InputHTMLAttributes<HTMLInputElement> { label: string; type?: 'submit' | 'reset' | 'button' | undefined; style: 'outlined' | 'classic' | undefined; }

const Button: React.FC<props> = ({ label, type, style }) => {

    return (
        <>
            <button className={style == "classic"
                ? "text-cream bg-dark-green text-xl rounded-lg px-6 py-3 mt-4 hover:bg-light-green transition ease-in-out delay-50"
                : "text-dark-green bg-cream border-2 border-dark-green rounded-lg px-4 py-2 hover:border-light-green hover:text-light-greentransition ease-in-out delay-50"}
                type={type}>{label}</button>
        </>
    );
}

export default Button;