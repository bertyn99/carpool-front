'use client'

import React, { InputHTMLAttributes, createContext } from 'react';
import { useForm } from 'react-hook-form'
import { useState, useRef } from 'react';
import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import Map from '../../components/map/Map'

interface props extends InputHTMLAttributes<HTMLInputElement> { label: string; type: string; icon: string; required: undefined | boolean; }

const UpdateTrip = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'all' });

    const onSubmit = data => console.log(data);

    /** Input field component */
    const Input = ({ label, required, type, placeholder }) => (
        <div>
            <legend>{label}</legend>
            <input
                {...register(label, { required })}
                className={errors[label]}
                type={type} placeholder={placeholder}
            />
            {errors[label] && <span>mandatory</span>}
        </div>
    )

    /** Group the person input fields in a component */
    const PersonFields = () => (
        <section>
            <h3>Personal information</h3>
            <Input label="Full name" type="text" placeholder="Ex: Maria Leopoldina de Habsburgo" />
            <Input label="Birthday" type="date" placeholder="dd/mm/aaa" />
        </section>
    )

    /** Group the contact input fields in a component */
    const ContactFields = () => (
        <section>
            <h3>Contact</h3>
            <Input label="Email" required type="email" placeholder="exemple@exemple.com" />
            <Input label="Phone" required type="tel" placeholder="(00) 0.0000-0000" />
        </section>
    )

    /** Group the address input fields in a component */
    const AddressFields = () => (
        <section>
            <h3>Address</h3>
            <Input label="Street" required type="text" placeholder="Street name, avenue, etc..." />
            <Input label="Number" required type="number" placeholder="000" />
        </section>
    )

    /** Nnavigation between steps */
    const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
    const leftArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"

    const Navigation = () => (
        <section>
            {
                step === fieldGroups.length - 1 &&
                <button type="submit" disabled={!isValid}>
                    SAVE
                </button>
            }
            {
                step < fieldGroups.length - 1 &&
                <button type="button" disabled={!isValid} onClick={() => { setStep(step + 1) }}>
                    <img src={rightArrow} />
                    NEXT
                </button>
            }
            {
                step > 0 &&
                <button type="button" onClick={() => { setStep(step - 1) }}>
                    <img src={leftArrow} />
                    BACK
                </button>
            }
        </section>
    )

    /** Mark the input group already filled as blue or gray if not */
    const Reference = () => (
        <footer>
            {renderMarkers()}
        </footer>
    )
    function renderMarkers() {
        let markers = []
        for (let i = 0; i < fieldGroups.length; i++)
            markers.push(<span />)
        return markers
    }

    const [step, setStep] = useState(0)

    const fieldGroups = [
        <PersonFields />,
        <ContactFields />,
        <AddressFields />
    ]

    return (
        <div>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>User Register</h2>
                    {fieldGroups[step]}
                    <Navigation />
                    <Reference />
                </form>
            </main>

        </div>
    )
};

export default UpdateTrip;