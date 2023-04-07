import { useGetCurrentUser } from "@/lib/hook/useGetCurrentUser";
import { redirect } from "next/navigation";
import React from "react";

const Modifyprofile = async () => {
  const currentUser = await useGetCurrentUser();

  if (!currentUser) redirect("/");
  return (
    <div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

                    <div className="sm:col-span-4">
                        <div className="mt-2 flex justify-center">
                        <Input label="Username" type="username" name="username" id="username" className=" block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required={undefined} />
                    </div>

                    <div className="col-span-full">
                        <div className="mt-2 flex justify-center">
                        <Input label="About" type="Write a few sentences about yourself." name="About" id="About" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required={undefined} />
                    </div>
                    </div>

                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        <div className="mt-2 flex items-center gap-x-3 justify-center">
                        <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <Input id="file-upload" name="file-upload" type="file" className="sr-only" required={undefined} />
                            </label>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3 ">
                        <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2 flex justify-center">
                        <Input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={undefined} />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2 flex justify-center">
                        <Input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={undefined} />
                        </div>
                    </div>

                    <div className="sm:col-span-4" >
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2 flex justify-center">
                        <Input id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={undefined} />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                        <div className="mt-2 flex justify-center">
                        <select id="country" name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                        <div className="mt-2 flex justify-center">
                        <Input type="text" name="street-address" id="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={undefined} />
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div className="mt-2 flex justify-center">
                        <Input type="text" name="city" id="city" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={undefined} />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                        <div className="mt-2 flex justify-center">
                        <Input type="text" name="region" id="region" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={undefined} />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                        <div className="mt-2 flex justify-center">
                        <Input type="text" name="postal-code" id="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={undefined} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Modifyprofile;
