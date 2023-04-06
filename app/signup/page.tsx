'use client';

import React, { useRef } from 'react';
import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'

const SignUp = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const telRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmitEvent = (event) => {
        event.preventDefault();
        console.log("email value : " + emailRef.current?.value)
        console.log("password value : " + nameRef.current?.value)
        console.log("password value : " + telRef.current?.value)
        console.log("password value : " + passwordRef.current?.value)
    }

    return (
        <>
            <div className='w-full py-52'>
                <form method="post" onSubmit={handleSubmitEvent} className='flex flex-col justify-center items-center'>
                    <Input label="Email" type="email" icon="Email" required ref={emailRef} />
                    <Input label="Nom" type="text" icon="" ref={nameRef} />
                    <Input label="Tel" type="text" icon="" ref={telRef} />
                    <Input label="Password" type="password" icon="Password" required ref={passwordRef} />
                    <Button label="S'inscrire" type="submit" style="classic" />
                </form>
            </div>
        </>
    );
};

export default SignUp;