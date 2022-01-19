import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userGeoIpData, setUserGeoIpData] = useState(null)

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`)
    .then(res => res.json())
    .then(data => setUserGeoIpData(data))
  }, [])

  return (
    <UserContext.Provider value={{ ip:userGeoIpData?userGeoIpData.ip : null, region:userGeoIpData?userGeoIpData.location.region:null, country:userGeoIpData?userGeoIpData.location.country:null}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;