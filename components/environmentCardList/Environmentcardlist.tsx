import { cardInfo2Type } from '@/types/types';
import React from 'react';
import EnvironmentCard from '../environmentCard/EnvironmentCard';
import Image from 'next/image'
import plant from '../../public/plant.svg'

interface Props {
  cardInfoList: cardInfo2Type[];
}

export const Environmentcardlist = ({ cardInfoList }: Props) => {
  return (
    <div className='w-full flex flex-col ml-10 mr-10 justify-start mx-4'>
      <div className="w-full flex flex-row justify-center">
        <p className='font-montserrat text-3xl text-center mb-8 ml-4'>Covoiturez avec style tout en agissant pour l'environnement</p>
        <Image
          src={plant}
          alt="Picture of the author"
          className='w-10 h-10 object-cover object-fit flex ml-4 mt-[-6px] mr-4' />
      </div>
      <p className='text-center text-lg tracking-tight text-dark-green mb-4 mx-4'>
        En optant pour Carpool, vous contribuez activement à réduire votre empreinte carbone tout en profitant d'un moyen de transport confortable et intelligent.
      </p>
      <p className='text-center text-lg tracking-tight text-dark-green mb-14 mx-4'>Carpool prévoit déjà<span className='font-bold text-light-green'> 450 000 </span>kilogrammes d’émissions de CO2 évitées sur la 1ère année de lancement :</p>
      <div className='homecards flex text-center items-center justify-center md:flex-row flex-col'>
        {
          cardInfoList.map((cardInfo2Type, idx) => {
            return (
              <EnvironmentCard cardInfo={cardInfo2Type} key={idx} />
            )
          })
        }
      </div>
    </div >
  );
}

