'use client';

import React, { useState } from 'react';
import Input from '../../components/inputs/Input'
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit } = useForm();

    return (
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <Input label="Email" type="email" icon="Email" />
                <Input label="Password" type="password" icon="Password" />
            </div>
        </>
    );
};

export default SignIn;