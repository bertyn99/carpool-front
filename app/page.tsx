'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Input from '../components/inputs/Input'

import React from "react";
import { useForm } from "react-hook-form";
import localFont from '@next/font/local'

const MontserratAlt1 = localFont({
  src: [
    {
      path: './webfonts/MontserratAlt1-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {

  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <Input type="email" icons="icon" />
      </div>
    </>
  )
} ``
