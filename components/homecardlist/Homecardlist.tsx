import { cardInfoType } from '@/types/types';
import React from 'react';
import Homecard from '../homecard/Homecard';

interface Props {
    title: string;
    cardInfoList: cardInfoType[];
}

export const Homecardlist = ({cardInfoList, title}:Props) => {
  return (
    <>
      <h2 className='text-center font-montserrat text-xl tracking-tight'>{title}</h2>
      <div className='homecards flex text-center content-center justify-center'>
        {
          cardInfoList.map((cardInfo) => {
            return (
                <Homecard cardInfo={cardInfo}/>
            )
          })
        }
      </div>
    </>
  );
}

