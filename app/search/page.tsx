import React from 'react';

import TripsCardList from '@/components/tripscardlist/Tripscardlist';

const Search = () => {
    
    
    const cardInfoList = [
        {
            url: "https://picsum.photos/200/300",
            urlalt: "car",
            NameFirst: "testFirst",
            NameLast: "testLast",
            StartDate: "11h00",
            EndDate: "15h30"
        },
        {
            url: "https://picsum.photos/200/300",
            urlalt: "car",
            NameFirst: "testFirst",
            NameLast: "testLast",
            StartDate: "11h00",
            EndDate: "15h30"
        },
        {
            url: "https://picsum.photos/200/300",
            urlalt: "car",
            NameFirst: "testFirst",
            NameLast: "testLast",
            StartDate: "11h00",
            EndDate: "15h30"
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