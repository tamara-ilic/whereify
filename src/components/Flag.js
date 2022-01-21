import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import '../styles/App.css'

function Flag() {
  const { country } = useContext(UserContext)

  return (
    <img className='flag' src={country?`https://flagcdn.com/20x15/${country.toLowerCase()}.png`:''} alt="country flag"></img>
  );

}

export default Flag;