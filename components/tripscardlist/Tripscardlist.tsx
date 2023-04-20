import { CardTripType } from '@/types/types';
import React from 'react';
import TripsCard from '../tripscard/Tripscard';
import Link from 'next/link'

interface Props {
  cardInfoList: Trip[];
}

export const TripsCardList = ({cardInfoList}:Props) => {
    return (
      <>
        <div className='flex flex-col justify-center w-5/6 items-center mt-12'>
          {
            cardInfoList.map((cardInfo) => {
              return (
                <Link href={`/tripsdetails/${cardInfo.id}`} className='w-full flex flex-col justify-center items-center' >
                  <TripsCard cardInfo={cardInfo}/>
                </Link>
              )
            })
          }
        </div>
      </>
    );
  }

export default TripsCardList;
