import HomeCard from '@/components/homecard/Homecard';
import React from 'react';
import type { cardInfoType } from '@/components/homecard/Homecard';
const Home = () => {
    const cardInfo: cardInfoType = {
        url: "https://picsum.photos/200/300",
        urlalt: "car",
        title: "Carpool",
        text1: "Carpool is a web application that allows users to find other users to carpool with.",
        text2: "Users can create a profile and post a ride that they are looking for or a ride that they are offering.",
        text3: "Users can also search for rides that other users have posted."
    }

    return (
        <div>
            <HomeCard cardInfo={cardInfo}/>
        </div>
    );
};

export default Home;