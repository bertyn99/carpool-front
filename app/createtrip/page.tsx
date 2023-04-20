'use client'

import React, { InputHTMLAttributes, createContext } from 'react';
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect } from 'react';
import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import Map from '../../components/map/Map'

interface props extends InputHTMLAttributes<HTMLInputElement> { label: string; type: string; icon: string; required: undefined | boolean; }

const CreateTrip = () => {

    const [departureDateState, setDepartureDateState] = useState("");
    const [departureAdressState, setDepartureAdressState] = useState("");
    const [arrivalAdressState, setArrivalAdressState] = useState();
    const [priceState, setPriceState] = useState();
    const [numberOfPlaceState, setNumberOfPlaceState] = useState();

    const onDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => { setDepartureDateState(e.target.value) }
    const onDepartureAdressState = (e: React.ChangeEvent<HTMLInputElement>) => { setDepartureAdressState(e.target.value) }

    const {
        formState: { errors, isValid }
    } = useForm({ mode: 'all' });

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    const Date = () => (
        <section className={"flex flex-col gap-1 mb-8"}>
            <h3 className='font-montserrat text-4xl text-left mb-8'>Choisissez votre date de départ</h3>
            <Input label="Date de départ" required type="date" placeholder="dd/mm/aaa" style="placeholder-gray-500" name="departureDate" onChange={onDepartureDateChange} value={departureAdressState} />
        </section>
    )

    const DepartureArrival = () => (
        <section className={"flex flex-col gap-1 mb-8"}>
            <h3 className='font-montserrat text-4xl text-left mb-8'>Choisissez votre adresse de départ et d'arrivée</h3>
            <Input label="Adresse de départ" required type="text" placeholder="Paris, Nantes .." name="departureAdress" onChange={onDepartureAdressState} />
            <Input label="Adresse d'arrivée" required type="text" placeholder="Chartres, Toulouse .." name="arrivalAdress" />
        </section>
    )

    const InfosSupp = () => (
        <section className={"flex flex-col gap-1 mb-8"}>
            <h3 className='font-montserrat text-4xl text-left mb-8'>Renseignez le prix et le nombre de places</h3>
            <Input label="Prix du trajet" required type="text" placeholder="Exemple : 10" name="price" />
            <Input label="Nombres de places" required type="text" placeholder="Exemple : 2" name="arrivalAdress" />
        </section>
    )

    /** Nnavigation between steps */
    const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
    const leftArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"

    const Navigation = () => (
        <section className={"w-full justify-between mt-4 flex flex-row-reverse"}>
            {
                step === fieldGroups.length - 1 &&
                <button type="submit" className={"text-cream bg-dark-green text-xl rounded-lg px-6 py-3 mt-4 hover:bg-light-green transition ease-in-out delay-50"} disabled={!isValid}>
                    Valider
                </button>
            }
            {
                step < fieldGroups.length - 1 &&
                <button type="button" className={"text-cream bg-dark-green text-xl rounded-lg px-6 py-3 mt-4 hover:bg-light-green transition ease-in-out delay-50"} disabled={!isValid}
                    onClick={() => { setStep(step + 1) }}>
                    Suivant
                </button>
            }
            {
                step > 0 &&
                <button type="button" className={"text-dark-green bg-cream border-2 border-dark-green text-xl rounded-lg px-6 py-3 mt-4 hover:border-light-green hover:text-light-green transition ease-in-out delay-50"} disabled={!isValid}
                    onClick={() => { setStep(step - 1) }}>
                    Retour
                </button>
            }
        </section>
    )

    /** Mark the input group already filled as blue or gray if not */
    const Reference = () => (
        <footer className={"w-full flex items-center justify-center gap-1 py-4"}>
            {renderMarkers()}
        </footer>
    )
    function renderMarkers() {
        let markers = []
        for (let i = 0; i < fieldGroups.length; i++)
            markers.push(<span className={step >= i ? "bg-blue-600" : "bg-gray-300"} />)
        return markers
    }

    const [step, setStep] = useState(0)

    const fieldGroups = [
        <Date />,
        <DepartureArrival />,
        <InfosSupp />
    ]

    return (
        <>
            <div className='container mx-auto py-24'>
                <div className='pl-10 xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden'>
                    <div className='flex-1 px-10 flex flex-col justify-center items-center py-8'>
                        <form className={""} onSubmit={handleSubmit}>
                            {fieldGroups[step]}
                            <Navigation />
                            <Reference />
                        </form>
                    </div>
                    <div className='flex-1 bg-light-green flex flex-col justify-center items-center'>
                        <Map />
                    </div>
                </div>
            </div >
        </>
    );
};

export default CreateTrip;