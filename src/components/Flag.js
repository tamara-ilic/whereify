import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import '../styles/App.css'

function Flag() {
  const { country } = useContext(UserContext)

  return (
    <img src={country?`https://flagcdn.com/160x120/${country.toLowerCase()}.png`:''} alt="country flag"></img>
  );

}

export default Flag;