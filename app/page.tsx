import './page.module.css'

import React from "react";
import { Homecardlist } from '@/components/homecardlist/Homecardlist';

export default function Home() {
  const cardInfoList = [
    {
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      title: "Carpool",
      text1: "Carpool is a web application that allows users to find other users to carpool with.",
      text2: "Users can create a profile and post a ride that they are looking for or a ride that they are offering.",
      text3: "Users can also search for rides that other users have posted."
    },
    {
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      title: "Carpool",
      text1: "Carpool is a web application that allows users to find other users to carpool with.",
      text2: "Users can create a profile and post a ride that they are looking for or a ride that they are offering.",
      text3: "Users can also search for rides that other users have posted."
    },
    {
      url: "https://picsum.photos/200/300",
      urlalt: "car",
      title: "Carpool",
      text1: "Carpool is a web application that allows users to find other users to carpool with.",
      text2: "Users can create a profile and post a ride that they are looking for or a ride that they are offering.",
      text3: "Users can also search for rides that other users have posted."
    },
  ];
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <Homecardlist cardInfoList={cardInfoList} title="Everything to know about CarPool"/>  
      </div>
    </>
  )
}
