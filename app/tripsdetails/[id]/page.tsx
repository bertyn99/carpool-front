"use client";

import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

const TripsDetails = () => {

    return (
        <>
          <div className='font-montserrat w-full mt-32 mb-32 flex flex-col justify-center items-center'>
            <div className=' w-3/4 flex flex-col rounded-2xl shadow-2xl p-12'>
              <div className='w-3/4 mt-7 flex flex-row mx-auto justify-between' id='driver'>
                <div className='flex flex-row'>
                  <div className=' mr-8'>img PP driver</div>
                  <span>trajet de 'nom conducteur'</span>
                </div>
                <div className='flex flex-row align-middle items-center'>
                  <h3 className='mr-3'>PRIX : </h3>
                  <h3 className=' text-light-green font-bold text-3xl'>36€</h3>
                </div>
              </div>
              <hr className="w-3/4 h-1 mx-auto my-14 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>
              <div className='w-3/4 mx-auto flex flex-row justify-around items-center' id='trips'>
                <div className='w-2/4 flex flex-row justify-around p-3' id="tripsDetails">
                  <div className=' h-full flex flex-col justify-center items-center'>
                    <div className=' w-9 h-9 border-4 border-black rounded-full'></div>
                    <div className=' h-52 border-4 border-black w-px'></div>
                    <div className=' w-9 h-9 border-4 border-black rounded-full'></div>
                  </div>
                  <div className='flex flex-col w-3/4 justify-between'>
                    <div className='flex flex-col'>
                      <h3 className=' font-bold text-2xl' >Adresse départ</h3>
                      <h3 className=' text-light-green text-opacity-70'>Heure de départ : {}</h3>
                    </div>
                    <div className='flex flex-col'>
                      <h3 className=' font-bold text-2xl' >Adresse arrivée</h3>
                      <h3 className=' text-light-green text-opacity-70'>Heure d'arrivée : {}</h3>
                    </div>
                  </div>
                </div> 
                <div className=' w-2/4 h-96 p-3' id="mapContainer">
                   <MapContainer center={[47.21443585326467, -1.611179838419324]} zoom={10} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }} className=' rounded-2xl'>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                  </MapContainer>
                </div>
              </div>
              <hr className="w-3/4 h-1 mx-auto my-14 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>
            </div>
          </div>
          
        </>
      ) 
};

export default TripsDetails;