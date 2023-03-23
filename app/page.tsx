'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Input from '../components/inputs/Input'

import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {

  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <Input label="Email" type="email" icon="Email" />
        <Input label="Password" type="password" icon="Password" />
      </div>
    </>
  )
}
