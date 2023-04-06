'use client';

import React from 'react';
import Input from '../../components/inputs/Input'

const SignIn = () => {

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