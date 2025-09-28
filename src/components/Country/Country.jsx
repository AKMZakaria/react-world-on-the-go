import { CssSyntaxError } from 'postcss';
import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country.flags)
    // console.log(handleVisitedCountries)

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {

        // ------------ 1st way ----------- 
        //     if (visited) {
        //         setvisited(false)
        //     } else {
        //         setvisited(true);
        //     }

        // ------------ 2nd way -----------

        // setVisited(visited ? false : true);

        // ------------3rd way ------------
        setVisited(!visited);

        handleVisitedCountries(country);



    }
    return (
        <div className={`grid m-5 p-5 rounded-xl text-black  ${visited && 'bg-teal-500 '} ${!visited && 'bg-white'} `}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>
                Population: {country.population.population}
                {
                    country.area.area > 300000 ?
                        ' Big Country' :
                        ' Small Country'
                }
            </p>
            <button className='text-white' onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visisted'}
            </button>

        </div>
    );
};

export default Country;


/**
 * 1.
 * 
 */