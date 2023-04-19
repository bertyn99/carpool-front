'use client' 
import AddCar from '@/components/addCar/AddCar';
import Button from '@/components/buttons/Button';
import Modifyprofile from '@/components/modifyProfile/Modifyprofile';
import ProfileCard from '@/components/profileCard/ProfileCard';
import { profileInfoAndCarType, profileInfoType } from '@/types/types';
import React, { useEffect, useState } from 'react';

const Profile: React.FC = () => {
    const profileInfoMock: profileInfoAndCarType = {
        name: "Kuack Ube",
        url: "https://picsum.photos/200/300",
        email: "TuaMer@gmail.com",
        phone: "06 06 06 06 06",
        address: "1 rue de la paix",
        city: "Paris",
        postalCode: "75000",
        cars: [
            {
                model: "Fiat 126",
                nbPlate: "AA-123-AA",
                color: "Red",
                seats: 4
            },
        ],
    }

    const [showModify, setShowModify] = useState(false);    
    const [showAddCar, setShowAddCar] = useState(false);  
    const [profileInfo, setProfileInfo] = useState<profileInfoType>({
        url: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
    })    

    useEffect(() => {
        console.log(profileInfo);
    }, [profileInfo])

    const handleChange = (e: { target: { value: any; name: any; }; }) => {
        const value = e.target.value;
        setProfileInfo({
            ...profileInfo,
            [e.target.name]: value
        });
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(JSON.stringify(profileInfo));
    }; 

    return (
        <div className="container w-full px-4 mx-auto font-montserrat text-center">
            <div className="relative flex flex-col w-full mb-6 shadow-xl rounded-lg mt-16">
                <h1 className=" text-4xl font-semibold leading-7 text-dark-green mb-8">Votre Profile</h1>
                <ProfileCard profileInfo={profileInfoMock}/>
                <div className="py-10 border-t border-blueGray-200 text-center">
                     {showModify?<Modifyprofile handleChange={handleChange} profileInfo={profileInfo} handleSubmit={handleSubmit} setShowModify={setShowModify}/>: showAddCar? <AddCar/>:
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