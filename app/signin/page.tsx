'use client';
import React, { useState, useRef, useEffect } from 'react';
import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'

const SignIn = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmitEvent = (event) => {
        event.preventDefault();
        console.log("email value : " + emailRef.current?.value)
        console.log("password value : " + passwordRef.current?.value)
    }

    return (
        <>
            <div className='w-full py-52'>
                <form method="post" onSubmit={handleSubmitEvent} className='flex flex-col justify-center items-center'>
                    <Input label="Email" type="email" icon="Email" required ref={emailRef} />
                    <Input label="Password" type="password" icon="Password" required ref={passwordRef} />
                    <Button label="Se connecter" type="submit" style="classic" />
                </form>
            </div>
        </>
    );
};

export default SignIn;