import React from 'react';

import type { CardTripType } from '../../types/types';

interface Props {
   cardInfo: CardTripType;
}

const TripsCard = ({cardInfo}:Props) => {
    return (
       <div className="flex flex-row justify-center w-4/6 rounded-xl my-6 bg-light-green py-6 px-5 drop-shadow-lg">
            <div className='flex flex-col mx-4'>
                <img src={cardInfo.url} alt={cardInfo.urlalt} className=" w-16 h-16 rounded-full"/>
            </div>
            <div className='flex flex-col justify-center w-fit px-3 mx-4'>
                <h3 className='text-lg font-bold'>Nom Prénom</h3>
                <h4 className=' text-base  font-bold text-white'>{cardInfo.NameFirst} {cardInfo.NameLast}</h4>
            </div>
            <div className='flex flex-col justify-center w-fit px-3 mx-4'>
                <h3 className='text-lg font-bold'>Départ</h3>
                <h4 className=' text-base  font-bold text-white'>{cardInfo.StartDate}</h4>
            </div>
            <div className='flex flex-row justify-center w-2/6 mx-4 items-center'>
                <hr className='border-dashed border-2 w-full'></hr>
            </div>
            <div className='flex flex-col justify-center w-fit px-3 mx-4'>
                <h3 className='text-lg font-bold'>Arrivée</h3>
                <h4 className=' text-base  font-bold text-white'>{cardInfo.EndDate}</h4>
            </div>
       </div>
    );
};

export default TripsCard;