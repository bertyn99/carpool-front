import React from 'react';

import TripsCardList from '@/components/tripscardlist/Tripscardlist';
import Input from '@/components/inputs/Input';

const Search = () => {
    
    
    const cardInfoList = [
        {
            url: "https://picsum.photos/200/300",
            urlalt: "car",
            NameFirst: "Bouet",
            NameLast: "Valentin",
            StartDate: "11h00",
            EndDate: "15h30",
            Price: "25"
        },
        {
            url: "https://picsum.photos/200/300",
            urlalt: "car",
            NameFirst: "Merde",
            NameLast: "Lucas",
            StartDate: "11h00",
            EndDate: "15h30",
            Price: "25"
        },
        {
            url: "https://picsum.photos/200/300",
            urlalt: "car",
            NameFirst: "Droguer",
            NameLast: "Douglas",
            StartDate: "11h00",
            EndDate: "15h30",
            Price: "25"
        },
      ];
      return (
        <>
          <div className='flex flex-col justify-center items-center'>
            <TripsCardList cardInfoList={cardInfoList}/>  
          </div>
        </>
      ) 
};

export default Search;