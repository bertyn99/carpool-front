import { cardInfoType } from '@/types/types';
import React from 'react';
import Homecard from '../homecard/Homecard';

interface Props {
  title: string;
  cardInfoList: cardInfoType[];
}

export const Homecardlist = ({ cardInfoList, title }: Props) => {
  return (
    <>
      <h2 className='text-center font-montserrat text-xl tracking-tight text-dark-green'>{title}</h2>
      <div className='homecards flex text-center content-center justify-center'>
        {
          cardInfoList.map((cardInfo, idx) => {
            return (
                <Homecard cardInfo={cardInfo} key={idx}/>
            )
          })
        }
      </div>
    </>
  );
}

