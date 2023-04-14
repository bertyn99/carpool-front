import { profileInfoType } from '@/types/types';
import React from 'react';
interface props{
    profileInfo: profileInfoType;
}


const ProfileCard: React.FC<props> = (profileInfo) => {
    return (
        <div className="px-6">                
            <div className="text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 flex justify-center">
                        {profileInfo.profileInfo.url? 
                        <div className="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full ">
                            <img alt={profileInfo.profileInfo.urlalt} src={profileInfo.profileInfo.url} />
                        </div>:
                        <div className="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full ">
                            <svg className="absolute w-40 h-40 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg"><path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                        </div>}      
                    </div>
                </div>
                <h3 className="text-2xl font-semibold leading-normal text-dark-green mb-8">
                    {profileInfo.profileInfo.name}
                </h3>
                
                <span className="text-dark-green text-lg font-bold">Adresse:</span>
                <div className="text-base block uppercase mb-8">
                    <p>{profileInfo.profileInfo.address}</p>
                    <p>{profileInfo.profileInfo.postalCode}</p>  
                    <p>{profileInfo.profileInfo.city}</p>                  
                </div>
                <span className="text-dark-green text-lg font-bold">Numéro de téléphone:</span>
                <div className="text-base block uppercase mb-8">
                    <p>{profileInfo.profileInfo.phone}</p>            
                </div>
            </div>
            <div className="w-full text-center flex justify-center ">
                <div className="text-center mb-8">
                    <span className="text-dark-green text-lg font-bold">Voiture:</span>
                    <div>
                        {profileInfo.profileInfo.cars.map((car, index) => {
                            return(
                                <div className="text-base block uppercase " key={index}>
                                    <p>Model: {car.model}</p>
                                    <p>Plaque: {car.nbPlate}</p>
                                    <p>Couleur: {car.color}</p>
                                    <p>Places: {car.seats}</p>
                                </div>
                            )
                        })
                        }
                    </div>                         
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;