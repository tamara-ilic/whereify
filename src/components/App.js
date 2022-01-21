import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import AppMap from './AppMap'
import Facts from './Facts'
import { DateTime } from 'luxon'
import '../styles/App.css'

function App() {
  const { ip, region, country } = useContext(UserContext)

  const date = DateTime.now()
  const time24hrClock = date.toLocaleString(DateTime.TIME_24_SIMPLE)
  const timeZone = date.zoneName
  
  return (
    <div className="App">
      <h1>Whereify</h1>
        <p>Your Public IP Address is: {ip}</p>
        <p>Your Current Location is: {region}, {country}</p>
        <p>Your local time is {time24hrClock}</p>
        <p>Time zone: {timeZone}</p>
      <AppMap />
      <Facts />
    </div>
  );
}

export default App;
