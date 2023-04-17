import { Trip } from "@/types/types";
import React from "react";
import TripsCard from "../tripscard/Tripscard";

interface Props {
  cardInfoList: Trip[];
}

export const TripsCardList = ({ cardInfoList }: Props) => {
  console.log(cardInfoList);
  return (
    <>
      <div className="flex flex-col justify-center w-5/6 items-center mt-12">
        {/*  {cardInfoList.map((cardInfo) => {
          return <TripsCard cardInfo={cardInfo} key={cardInfo.id} />;
        })} */}
      </div>
    </>
  );
};

export default TripsCardList;
