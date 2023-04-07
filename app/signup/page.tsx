'use client';

import React, { useRef } from 'react';
import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import Image from "next/image";

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
            <div className='container mx-auto py-24'>
                <div className='pl-10 xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden'>
                    <div className='flex-1 px-10 flex flex-col justify-center items-center py-8'>
                        <form method="post" onSubmit={handleSubmitEvent} className='flex flex-col justify-center items-center'>
                            <Input label="Email" type="email" icon="Email" required ref={emailRef} />
                            <Input label="Nom" type="text" icon="" ref={nameRef} />
                            <Input label="Tel" type="text" icon="" ref={telRef} />
                            <Input label="Password" type="password" icon="Password" required ref={passwordRef} />
                            <Button label="S'inscrire" type="submit" style="classic" />
                        </form>
                    </div>
                    <div className='flex-1 bg-light-green flex flex-col justify-center items-center'>
                        <Image className='mb-8' width="160" height="260" src="/logo.png" alt="" />
                        <div className='flex flex-row justify-center items-center'>
                            <span className="font-montserrat text-5xl tracking-tight">CAR</span>
                            <span className="font-montserrat text-white text-5xl tracking-tight">POOL</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SignUp;