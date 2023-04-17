import React from "react";

import TripsCardList from "@/components/tripscardlist/Tripscardlist";
import SearchBar from "@/components/searchbar/searchbar";
import { Trip } from "@/types/types";
import { getTrips } from "@/service/tripsService";

const Search = async () => {
  const tripsData: Promise<{ success: boolean; data: Trip[] }> = getTrips();
  const tripsList = (await tripsData).data;

  const cardInfoList = [
    {
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      NameFirst: "Bouet",
      NameLast: "Valentin",
      StartDate: "11h00",
      EndDate: "15h30",
      Price: "25",
      StartAddress: "Cholet",
      EndAddress: "Nantes",
    },
    {
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      NameFirst: "Merde",
      NameLast: "Lucas",
      StartDate: "11h00",
      EndDate: "15h30",
      Price: "25",
      StartAddress: "Cholet",
      EndAddress: "Nantes",
    },
    {
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      NameFirst: "Droguer",
      NameLast: "Douglas",
      StartDate: "11h00",
      EndDate: "15h30",
      Price: "25",
      StartAddress: "Cholet",
      EndAddress: "Nantes",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" mt-28 w-full flex flex-col justify-center items-center">
          <SearchBar />
        </div>
        <div className="mt-8 w-full flex flex-col justify-center items-center"></div>
        <div className="w-full flex flex-col justify-center items-center">
          {tripsList.length === 0 ? (
            <>Their is no trip for now</>
          ) : (
            <TripsCardList cardInfoList={tripsList} />
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
