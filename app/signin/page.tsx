"use client";
import React, { useState, useRef, useEffect } from "react";
import Input from "../../components/inputs/Input";
import Button from "../../components/buttons/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {signIn, useSession} from "next-auth/react";
import { useGetCurrentUser } from "@/lib/hook/useGetCurrentUser";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const result = await signIn("credentials", {
      email: data?.email,
      password:data?.password,
      redirect: true,
      callbackUrl: "/", 
    });
    console.log(result)
  };

  return (
    <>
      <div className="container mx-auto py-44">
        <div className="pl-10 xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
          <div className="flex-1 px-10 flex flex-col justify-center items-center py-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center"
            >
              <Input
                name="email"
                required
                register={register}
                errors={errors}
              />
              <Input
                name="password"
                register={register}
                errors={errors}
                required
              />
              <Button label="Se connecter" type="submit" style="classic" />
            </form>
          </div>
          <div className="flex-1 bg-light-green flex flex-col justify-center items-center">
            <Image
              className="mb-8"
              width="160"
              height="260"
              src="/logo.png"
              alt=""
            />
            <div className="flex flex-row justify-center items-center">
              <span className="font-montserrat text-5xl tracking-tight">
                CAR
              </span>
              <span className="font-montserrat text-white text-5xl tracking-tight">
                POOL
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
