
import React from 'react';
import parse from 'html-react-parser';
import type { cardInfo2Type } from '../../types/types';
import { Icon } from '@iconify/react';
import Image from 'next/image'
import tree from '../../public/tree.svg'
import water from '../../public/water.svg'
import timer from '../../public/timer.svg'

interface Props {
    cardInfo: cardInfo2Type;
}

const EnvironmentCard = ({ cardInfo }: Props) => {

    let icons = {
        tree,
        water,
        timer
    }

    return (
        <div className="card max-w-sm justify-center bg-brown/25 mx-4 p-6 rounded-lg">
            <div className="w-full flex justify-center items-center my-4">
                <Image
                    src={cardInfo.icon == "tree" ? tree : null || cardInfo.icon == "water" ? water : null || cardInfo.icon == "timer" ? timer : null}
                    width={10}
                    height={10}
                    alt="Picture of the author"
                    className='w-14 h-14 object-cover object-fit flex' />
            </div>
            <h5 className="mb-2 text-2xl tracking-tight text-dark-green">{parse(cardInfo.text)}</h5>
        </div>
    );
};

export default EnvironmentCard;