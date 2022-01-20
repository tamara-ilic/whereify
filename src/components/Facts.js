import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

function Facts() {
  const [countryInfo, setCountryInfo] = useState(null);
  const apiKey = "KD3b4lvNXamL6+jKLj8Vsg==JO4gqlzPjilqi6Ls";
  const { country } = useContext(UserContext)

  useEffect(() => {
    if(country){fetch(`https://api.api-ninjas.com/v1/country?name=${country}`, {
      method: 'get',
      headers: new Headers ({
        'X-Api-Key': apiKey
      })
    })
    .then((res) => res.json())
    .then((result) => {
      setCountryInfo(result[0]);
      console.log(result[0]);
    });}
  }, [country]);

 
  return (
    <div>
      <h3>Facts About Your Location</h3>
      <ul>{countryInfo?
        <div>
        <li>Country Name: {countryInfo.name}</li>
        <li>Capital: {countryInfo.capital}</li>
        <li>Currency: {countryInfo.currency.name}</li>
        <li>Male Life Expectancy: {countryInfo.life_expectancy_male} years</li>
        <li>Female Life Expectancy: {countryInfo.life_expectancy_female} years</li>
        </div>
        :null}
      </ul>
    </div>
    );

}

export default Facts;