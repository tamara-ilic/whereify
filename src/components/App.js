import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import '../styles/App.css'

function App() {
  const { userGeoIpData } = useContext(UserContext)
  return (
    <div className="App">
      <h1>Whereify</h1>
      {userGeoIpData && userGeoIpData.ip}
    </div>
  );
}

export default App;
