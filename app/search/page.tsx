import React from 'react';
import Link from 'next/link'

import TripsCardList from "@/components/tripscardlist/Tripscardlist";
import SearchBar from "@/components/searchbar/searchbar";
import { Trip } from "@/types/types";
import { getTrips } from "@/service/tripsService";

const Search = () => {
  const cardInfoList = [
    {
      id: 1,
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      NameFirst: "Bouet",
      NameLast: "Valentin",
      StartDate: "11h00",
      EndDate: "15h30",
      Price: "25",
      StartAddress: "Cholet",
      EndAddress: "Nantes"
    },
    {
      id: 2,
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      NameFirst: "Vroumette",
      NameLast: "Lulu",
      StartDate: "11h00",
      EndDate: "15h30",
      Price: "25",
      StartAddress: "Cholet",
      EndAddress: "Nantes"
    },
    {
      id: 3,
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      NameFirst: "L'as",
      NameLast: "Douglas",
      StartDate: "11h00",
      EndDate: "15h30",
      Price: "25",
      StartAddress: "Cholet",
      EndAddress: "Nantes"
    },
    {
      id: 4,
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      NameFirst: "Le zinzin",
      NameLast: "Bertyn",
      StartDate: "11h00",
      EndDate: "15h30",
      Price: "25",
      StartAddress: "Cholet",
      EndAddress: "Nantes"
    },
  ];
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className=' mt-28 w-full flex flex-col justify-center items-center'>
          <SearchBar />
        </div>
        <div className='mt-8 w-full flex flex-col justify-center items-center'>

        </div>
        <div className='w-full flex flex-col justify-center items-center mb-36' >
          <TripsCardList cardInfoList={cardInfoList} />
        </div>
      </div>
    </>
  )
};

export default Search;
