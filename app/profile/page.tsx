'use client' 
import AddCar from '@/components/addCar/AddCar';
import Button from '@/components/buttons/Button';
import Modifyprofile from '@/components/modifyProfile/Modifyprofile';
import ProfileCard from '@/components/profileCard/ProfileCard';
import { profileInfoType } from '@/types/types';
import { set } from 'immer/dist/internal';
import React, { useState } from 'react';

const Profile = () => {
    const [showModify, setShowModify] = useState(false);    
    const [showAddCar, setShowAddCar] = useState(false);  
    const [profileInfoUp, setProfileInfoUp] = useState({});

    const profileInfo: profileInfoType = {
        name: "Kuack Ube",
        url: "https://picsum.photos/200/300",
        email: "TuaMer@gmail.com",
        phone: "06 06 06 06 06",
        address: "1 rue de la paix",
        city: "Paris",
        postalCode: "75000",
        urlalt: 'profile picture',
        cars: [
            {
                model: "Fiat 126",
                nbPlate: "AA-123-AA",
                color: "Red",
                seats: 4
            },
        ],
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(e);
        setProfileInfoUp(e);
    }; 
    return (
        <div className="container w-full px-4 mx-auto font-montserrat text-center">
            <div className="relative flex flex-col w-full mb-6 shadow-xl rounded-lg mt-16">
                <h1 className=" text-4xl font-semibold leading-7 text-dark-green mb-8">Votre Profile</h1>
                <ProfileCard profileInfo={profileInfo}/>
                <div className="py-10 border-t border-blueGray-200 text-center">
                     {showModify?<Modifyprofile handleSubmit={handleSubmit}/>: showAddCar? <AddCar/>:
                     <div className="flex flex-wrap justify-center gap-x-6">
                        <Button onClick={()=>(setShowModify(true))} label="Modify Profile" type="submit" style="classic" />
                        <Button onClick={()=>(setShowAddCar(true))} label="Ajouter une voiture" type="submit" style="classic" />
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Profile;