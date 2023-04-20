import React from 'react';
import { profileInfoType } from '@/types/types';
import Button from '../buttons/Button';
import Input from '../inputs/Input';

interface props {
    profileInfo: profileInfoType;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setShowModify: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modifyprofile: React.FC<props> = ({ profileInfo, handleSubmit, handleChange, setShowModify }: props) => {
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12 font-montserrat">
                        <h2 className="text-xl font-semibold leading-7 text-dark-green">Modifier votre profile</h2>
                        <p className="mt-1 text-sm leading-6 text-dark-green mb-8">Ces informations seront affichées sur votre profile, faites attention à ce que vous partagez</p>
                        <div className="sm:col-span-4">
                            <div className="col-span-full">
                                <label className="block font-medium leading-6 font-montserrat text-xl text-dark-green">Photo de profile</label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 m-4">
                                    <div className="text-center">
                                        <div className="mt-4 flex text-sm leading-6 text-dark-green">
                                            <label className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <Input onChange={handleChange} value={profileInfo.url} label="Télécharger une image" id="file-upload" name="Télécharger une image" type="file" className="sr-only" required={undefined} />
                                            </label>
                                        </div>
                                        <p className="text-xs leading-5 text-dark-green">PNG, JPG, GIF jusqu'a 10MO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12 font-montserrat">
                        <h2 className="text-xl font-semibold leading-7 text-dark-green ">Information personnel</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                            <div className="md:col-span-2 ">
                                <div className="mt-2 flex justify-center">
                                    <Input onChange={handleChange} value={profileInfo.name} label="Prenom" placeholder="Prenom" name="name" id="name" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2" >
                                <div className="mt-2 flex justify-center">
                                    <Input onChange={handleChange} value={profileInfo.email} label="Email" id="email" name="email" placeholder="email" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                    <Input onChange={handleChange} value={profileInfo.phone} label="Numéro" placeholder="Numéro de téléphone" name="phone" id="phone" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                    <Input onChange={handleChange} value={profileInfo.address} label="Rue" placeholder="Rue" name="address" id="address" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                    <Input onChange={handleChange} value={profileInfo.city} label='Ville' placeholder="Ville" name="city" id="city" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                    <Input onChange={handleChange} value={profileInfo.postalCode} label="Code Postal" placeholder="Code Postal" name="postalCode" id="postalCode" required={undefined} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-x-6 justify-center">
                    <Button onClick={() => setShowModify(false)} style="classic" type="button" label="Annuler" />
                    <Button style="classic" type='submit' label="Enregistrer" />
                </div>
            </form>
        </div>
    );
};

export default Modifyprofile;
