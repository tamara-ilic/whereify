import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import Flag from './Flag'
import '../styles/App.css'

function App() {
  const {ip, region, country } = useContext(UserContext)
  
  // const { userGeoIpData } = useContext(UserContext)
  
  return (
    <div className="App">
      <h1>Whereify</h1>
      <p>{ip}</p>
      <p>{region}, {country}</p>
      <Flag />
    </div>
  );
}

export default App;
