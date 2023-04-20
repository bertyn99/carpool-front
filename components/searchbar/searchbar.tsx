import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex flex-row justify-center w-4/6 my-6 py-2 px-5 drop-shadow-lg">
            <div className='w-5/6 h-fit flex flex-row justify-between'>
                <input className=' rounded-l-lg appearance-none block w-5/12 bg-brown/25 text-gray-700 border-r-2 border-black  py-3 px-4 leading-tight focus:outline-none focus:bg-white ' placeholder='Adresse de départ ...' />
                <input className=' appearance-none block w-5/12 bg-brown/25 text-gray-700 border-r-2 border-black py-3 px-4 leading-tight focus:outline-none focus:bg-white ' placeholder="Adresse d'arrivée..." />
                <button className=' rounded-r-lg appearance-none block w-2/12 bg-light-green  py-3 px-4 text-white'>Rechercher</button>
            </div>
        </div>
    );
};

export default SearchBar;