"use client";

import "./page.module.css";
import React from "react";
import { Homecardlist } from "@/components/homecardlist/Homecardlist";
import { Environmentcardlist } from "@/components/environmentCardList/Environmentcardlist";
import mapHome from "../public/sectiontrips-dark.svg";
import Image from "next/image";
import Button from "../components/buttons/Button";
import WaveTop from "../public/wave.svg";
import WaveBottom from "../public/wave2.svg";
import timer from "../public/timer.svg";
import tree from "../public/tree.svg";
import water from "../public/water.svg";
import { Icon } from "@iconify/react";

export default function Home() {
  const cardInfoList = [
    {
      url: "https://images.unsplash.com/photo-1529424601215-d2a3daf193ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      urlalt: "Rencontres",
      title: "Rencontres",
    },
    {
      url: "https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      urlalt: "Luxe",
      title: "Luxe",
    },
    {
      url: "https://i.pinimg.com/564x/2f/5c/17/2f5c17a8a597767f11d9a3472178912f.jpg",
      urlalt: "Ecologie",
      title: "Ecologie",
    },
  ];
  const cardInfoList2 = [
    {
      text: "C'est comme si nous avions planté <span className='font-bold'>17 550</span> arbres",
      icon: "tree",
    },
    {
      text: "Cela représente <span className='font-bold'>2 900 000</span> litres d’eau potable non consommés",
      icon: "water",
    },
    {
      text: "L'équivalent de <span className='font-bold'>13 600</span> jours de consommation d'1 Français",
      icon: "timer",
    },
  ];
  return (
    <>
      <div className="my-10 w-full flex flex-row flex-nowrap">
        <div className="flex-1 w-full px-24 py-24">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                "url(https://rideamigos.com/wp-content/uploads/2019/01/Ride-Amigos-02-1030x723.png)",
            }}
          ></div>
        </div>
        <div className="flex-1 pr-24 flex flex-col items-center">
          <Homecardlist cardInfoList={cardInfoList} title={""} />
          <div className="mb-10">
            <Button
              label="Recherchez votre trajet"
              type="submit"
              style="classic"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <a href="#avantages">
          <svg
            className="animate-bounce w-10 h-10 mx-2 my-2 text-dark-green "
            fill=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
      <div className="w-full" id="avantages">
        <Image
          src={WaveBottom}
          alt="Picture of the author"
          className="w-full"
        />
        <div className="w-full flex flex-col justify-center items-center bg-white">
          <Environmentcardlist cardInfoList={cardInfoList2} />
        </div>
        <Image src={WaveTop} alt="Picture of the author" className="w-full" />
      </div>
      <div
        className="w-full flex flex-col justify-center items-center mb-24"
        id="map"
      >
        <h3 className="w-full text-center mb-20 font-montserrat text-2xl">
          Avec notre application, voyagez{" "}
          <span className="font-bold">step</span> by{" "}
          <span className="font-bold">step</span> dans toute la France
        </h3>
        <Image
          src={mapHome}
          alt="Picture of the author"
          className="w-4/6 object-cover object-fit"
        />
      </div>
    </>
  );
}
