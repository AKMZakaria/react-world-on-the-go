import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) => {
        // console.log('handle clicked', country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)

    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    // console.log(countries)
    return (
        <div>
            <h1 className='mb-5'>Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='grid-cols-2 md:grid md:grid-cols-4'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                        >


                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;