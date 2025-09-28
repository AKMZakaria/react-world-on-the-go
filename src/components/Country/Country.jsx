import React from 'react';

const Country = ({ country }) => {
    console.log(country.flags)

    const handleVisited=()=>{
        console.log('Button Clicked')
    }
    return (
        <div className='grid m-5'>
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
            <button onClick={handleVisited}>Not Visisted</button>

        </div>
    );
};

export default Country;


/**
 * 1.
 * 
 */