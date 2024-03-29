"use client";

import React, {
  FC,
  InputHTMLAttributes,
  SetStateAction,
  useState,
  forwardRef,
  useEffect,
} from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import { FaRegEnvelope, FaEye } from "react-icons/fa";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  register?: UseFormRegister<FieldValues>;
  required?: undefined | boolean;
  placeholder?: string;
  style?: string;
  errors?: any;
  label?: string;
  value?: string;
  onChange?: (event: any) => void;
}

export type Ref = HTMLInputElement;

const Input: FC<props> = ({
  name,
  type,
  label,
  register,
  errors,
  placeholder,
  style,
  onChange,
  value,
  ...rest
}) => {
  const Icons = ({ name }: { name: string }) => {
    if (name === "") {
      return <FaRegEnvelope fillOpacity="0%" size={20} />;
    } else if (name == "email") {
      return <FaRegEnvelope fill="text-dark-green" size={20} />;
    } else if (name == "password") {
      return <FaEye fill="text-dark-green" size={20} />;
    }
    return null;
  };

  let patternArray = [
    {
      text: /[a-z0-9]{1,15}/,
      email: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
    },
  ];

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  return (
    <div className="flex flex-col mb-8">
      <label className="font-montserrat text-xl text-dark-green mb-4 capitalize">
        {label ? label : name}
      </label>
      <div className="flex flex-row">
        {register ?
          <input
            {...register(name, {
              pattern: {
                value:
                  name === "email" ? patternArray[0].email : patternArray[0].text,
                message: `${name} invalide`,
              },
            })}
            className={
              style != undefined
                ? style +
                " bg-brown/25 rounded-l-lg py-2 px-5 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica text-xl"
                : "bg-brown/25 rounded-l-lg py-2 px-5 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica text-xl"
            }
            aria-invalid={errors[name] ? "true" : "false"}
            placeholder={placeholder || name}
            type={type}
            {...rest}
          /* pattern={
            name === "email" ? patternArray[0].email : patternArray[0].text
          } */
          /> :
          <input value={value}
            className={style != undefined ? style + " border-0 bg-brown/25 rounded-l-lg py-2 px-5 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica text-xl"
              : "border-0 bg-brown/25 rounded-l-lg py-2 px-5 placeholder-dark-green/25 text-dark-green font-medium focus:ring-0 font-helvetica text-xl"}
            placeholder={placeholder || name}
            type={type || "text"}
            onChange={onChange}
            name={name}
          />
        }
        <div className="bg-brown/25 rounded-r-lg flex justify-center items-center pr-3 py-1 pl-3">
          <Icons name={name} />
        </div>
      </div>
      {errors ?
        errors[name] && (
          <p className="text-red-500 text-sm font-helvetica font-medium mt-2">
            {errors[name].message}
          </p>
        ) : null}
    </div>
  );
};

export default Input;
