import { useGetCurrentUser } from "@/lib/hook/useGetCurrentUser";
import { redirect } from "next/navigation";
import React from "react";
import Input from "../inputs/Input";

const Modifyprofile = async () => {
  const currentUser = await useGetCurrentUser();
    if (!currentUser) redirect("/");
    return (
        <div>
            <form>
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
                                            <Input label="Upload a file" id="file-upload" name="file-upload" type="file" className="sr-only" required={undefined} />
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
                                <Input label="Prenom" type="Prenom" name="first-name" id="first-name"  required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                <Input label="Nom" type="Nom" name="last-name" id="last-name" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2" >
                                <div className="mt-2 flex justify-center">
                                <Input label="Address Email" id="email" name="email" type="email" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                <Input label="Rue" type="Rue" name="street-address" id="street-address" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                <Input label='Ville' type="Ville" name="city" id="city" required={undefined} />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="mt-2 flex justify-center">
                                <Input label="Code Postal" type="ZIP / Postal code" name="postal-code" id="postal-code" required={undefined} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-x-6 justify-center">
                    <Button style="classic" type="button" label="Annuler"/>
                    <Button style="classic" type="button" label="Enregistrer" />
                </div>
            </form>
        </div>
    );
};

export default Modifyprofile;
