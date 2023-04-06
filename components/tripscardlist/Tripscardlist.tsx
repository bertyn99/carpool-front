import { CardTripType } from '@/types/types';
import React from 'react';
import TripsCard from '../tripscard/Tripscard';

interface Props {
    cardInfoList: CardTripType[];
}

export const TripsCardList = ({cardInfoList}:Props) => {
    return (
      <>
        <div className='flex flex-col justify-center w-5/6 items-center mt-12'>
          {
            cardInfoList.map((cardInfo) => {
              return (
                  <TripsCard cardInfo={cardInfo}/>
              )
            })
          }
        </div>
      </>
    );
  }

export default TripsCardList;