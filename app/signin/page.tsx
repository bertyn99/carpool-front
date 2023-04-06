'use client';
import React, { useState, useRef, useEffect } from 'react';
import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import { SubmitHandler } from 'react-hook-form';

const SignIn = () => {
    const inputRef = useRef(null);

    useEffect(
        () => {
            console.log("input ref : " + inputRef)
        }, [inputRef]
    );

    return (

        <>
            <div className='w-full py-52'>
                <form method="post" className='flex flex-col justify-center items-center'>
                    <Input label="Email" type="email" icon="Email" required ref={inputRef} />
                    <Input label="Password" type="password" icon="Password" required ref={inputRef} />
                    <Button label="Se connecter" type="submit" style="classic" />
                </form>
            </div>
        </>
    );
};

export default SignIn;