import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import Flag from './Flag'
import AppMap from './AppMap'
import '../styles/App.css'

function App() {
  const { ip, region, country } = useContext(UserContext)
  
  return (
    <div className="App">
      <h1>Whereify</h1>
      <p>{ip}</p>
      <p>{region}, {country}</p>
      <Flag />
      <AppMap />
    </div>
  );
}

export default App;
