import React from "react";

import type { Trip } from "../../types/types";
import Image from "next/image";

interface Props {
  cardInfo: Trip;
}

const TripsCard = ({ cardInfo }: Props) => {
  return (
    <div className="flex flex-row justify-between w-4/6 rounded-xl my-6 bg-light-green py-6 px-5 drop-shadow-lg">
      <div className="flex flex-col w-1/6 items-center">
        <Image
          src={cardInfo.driver.avatar}
          alt={cardInfo.driver.name}
          className=" w-16 h-16 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center w-1/6 items-center">
        <h3 className="text-lg font-bold">{cardInfo.driver.name}</h3>
        <h4 className="text-base  font-bold text-white">{cardInfo.price}€</h4>
      </div>
      <div className="flex flex-col justify-center w-1/6 items-center">
        <h3 className="text-lg font-bold">{cardInfo.start_address}</h3>
        {/*       <h4 className=" text-base  font-bold text-white">{cardInfo.date}</h4> */}
      </div>
      <div className="flex flex-row justify-center w-2/6 items-center">
        <hr className="border-dashed border-2 w-full"></hr>
      </div>
      <div className="flex flex-col justify-center w-1/6 items-center">
        <h3 className="text-lg font-bold">{cardInfo.end_address}</h3>
      </div>
    </div>
  );
};

export default TripsCard;
