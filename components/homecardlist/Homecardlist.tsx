import { cardInfoType } from '@/types/types';
import React from 'react';
import Homecard from '../homecard/Homecard';

interface Props {
  title: string;
  cardInfoList: cardInfoType[];
}

export const Homecardlist = ({ cardInfoList }: Props) => {
  return (
    <div className='w-full flex flex-col mt-20 mx-10 justify-start'>
      <h1 className='font-montserrat text-4xl text-center mb-8 sm:mx-4 mx-0'>CARPOOL</h1>
      <h2 className='text-center font-montserrat text-2xl tracking-tight text-dark-green mb-10 sm:mx-4 mx-0'>Une approche <span className='font-bold'>nouvelle</span> du Covoiturage</h2>
      <div className='homecards flex text-center items-center justify-center sm:flex-row flex-col'>
        {
          cardInfoList.map((cardInfo, idx) => {
            return (
              <Homecard cardInfo={cardInfo} key={idx} />
            )
          })
        }
      </div>
    </div>
  );
}

