import { useState, useEffect } from 'react';
import './Body.css';
import PlayerCard from '../PlayerCard/PlayerCard';

const Body = () => {
const [players, setPlayers] = useState([]);

const getPlayers = async () => {
  try {
    
    const response = await fetch('https://api.ingthing.co.uk/api/players');
    const data = await response.json();
    // response.json() throws "unexpected character at line 1" when the server
    // returns HTML (e.g. 404) instead of JSON. Parse manually and catch.
    setPlayers(data);
  } catch (err) {
    setPlayers([]);
  } 
};

useEffect(() => {
  getPlayers();

}, []);

return (
  <div className="body-content">
  {players.map((player) => (
    <PlayerCard key={player._id} 
    image={player.image} 
    name={player.name} 
    position={player.position} 
    birthdate={player.birthdate} 
    games={player.games_played  } 
    goals={player.goals} 
    assists={player.assists}
    Joined={player.joining_date}
    Left={player.leaving_date} />
  ))}
  </div>
);
};

export default Body;