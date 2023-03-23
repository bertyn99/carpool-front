
import React from 'react';

import type { cardInfoType } from '../../types/types';

interface Props {
    cardInfo: cardInfoType;
}

const HomeCard = ({cardInfo}:Props) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 :bg-gray-800 dark:border-gray-700">
            <img src={cardInfo.url} alt={cardInfo.urlalt} />           
            <h5  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardInfo.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardInfo.text1}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardInfo.text2}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardInfo.text3}</p>        
        </div>
    );
};

export default HomeCard;