import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex flex-row justify-center w-4/6 rounded-xl my-6 py-2 px-5 drop-shadow-lg">
            <div className='w-5/6 h-fit flex flex-row justify-between'>
                <input className=' appearance-none block w-5/12 bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Heure de départ ...'/>
                <input className=' appearance-none block w-5/12 bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder="Heure d'arrivée..."/>
                <button className='appearance-none block w-2/12 bg-black  py-3 px-4 text-white'>seacrhBar</button>
            </div>
        </div>
    );
};

export default SearchBar;