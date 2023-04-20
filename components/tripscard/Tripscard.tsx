import React from 'react';

import type { CardTripType } from '../../types/types';

interface Props {
   cardInfo: CardTripType;
}

const TripsCard = ({cardInfo}:Props) => {
    return (
       <div className="flex flex-row justify-between w-4/6 rounded-xl my-6 bg-light-green py-6 px-5 drop-shadow-lg" key={cardInfo.id}>
            <div className='flex flex-col w-1/6 items-center'>
                <img src={cardInfo.url} alt={cardInfo.urlalt} className=" w-16 h-16 rounded-full"/>
            </div>
            <div className='flex flex-col justify-center w-1/6 items-center'>
                <h3 className='text-lg font-bold'>{cardInfo.NameFirst} {cardInfo.NameLast}</h3>
                <h4 className='text-base  font-bold text-white'>{cardInfo.Price}€</h4>
            </div>
            <div className='flex flex-col justify-center w-1/6 items-center'>
                <h3 className='text-lg font-bold'>{cardInfo.StartAddress}</h3>
                <h4 className=' text-base  font-bold text-white'>{cardInfo.StartDate}</h4>
            </div>
            <div className='flex flex-row justify-center w-2/6 items-center'>
                <hr className='border-dashed border-2 w-full'></hr>
            </div>
            <div className='flex flex-col justify-center w-1/6 items-center'>
                <h3 className='text-lg font-bold'>{cardInfo.EndAddress}</h3>
                <h4 className=' text-base  font-bold text-white'>{cardInfo.EndDate}</h4>
            </div>
       </div>
    );
};

export default TripsCard;