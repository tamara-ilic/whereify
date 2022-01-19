import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import '../styles/App.css'

function App() {
  const {ip, region, country } = useContext(UserContext)
  
  // const { userGeoIpData } = useContext(UserContext)
  
  return (
    <div className="App">
      <h1>Whereify</h1>
      <p>{ip}</p>
      {region}, {country}
    </div>
  );
}

export default App;
