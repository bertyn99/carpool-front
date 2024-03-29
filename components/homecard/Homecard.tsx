
import React from 'react';

import type { cardInfoType } from '../../types/types';

interface Props {
    cardInfo: cardInfoType;
}

const HomeCard = ({ cardInfo }: Props) => {
    return (
        <div className="card max-w-sm p-6 justify-center">
            <img src={cardInfo.url} alt={cardInfo.urlalt} className="m-auto object-cover w-40 h-40 rounded-lg mb-4" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-green">{cardInfo.title}</h5>
            <p className="mb-3 text-dark-green text-lg">{cardInfo.text1}</p>
            <p className="mb-3 text-dark-green text-lg">{cardInfo.text2}</p>
            <p className="mb-3 text-dark-green text-lg">{cardInfo.text3}</p>
        </div>
    );
};

export default HomeCard;