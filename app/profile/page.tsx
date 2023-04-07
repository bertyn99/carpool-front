import Modifyprofile from '@/components/modifyProfile/Modifyprofile';
import React from 'react';
import Button from '../../components/buttons/Button'

const Profile = () => {
    const onClickModify = () => {
        console.log("modify");
    }
    return (
        <div className="w-full lg:w-4/12 px-4 mx-auto">
            <div className="relative flex flex-col bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                            </div>
                        </div>

                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold leading-normal text-blueGray-700 ">
                            Douglas Barlow
                        </h3>
                        <div className="font-bold">
                            <i className=""></i>
                            France - nantes
                        </div>
                    </div>
                    <div className="w-full text-center flex justify-center ">
                        <div className="text-center">
                            <span className="text-sm text-blueGray-400">Trips</span>
                            <span className="text-xl font-bold block uppercase ">
                                2
                            </span>
                            <span className="text-sm text-blueGray-400">Cars</span>
                            <span className="text-xl font-bold block uppercase ">
                                2
                            </span>
                        </div>
                    </div>
                    <div className="py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <Button label="Se connecter" type="submit" style="classic" />
                        </div>
                    </div>
                </div>
            </div>
            <Modifyprofile />
        </div>
    );
};

export default Profile;