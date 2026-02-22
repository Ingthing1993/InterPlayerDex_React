import { useState, useEffect } from 'react';
import './PlayerCard.css';

/**
 * Why "playerData().map is not a function" happened:
 *
 * - playerData was an async function. When you call playerData(), it returns a
 *   Promise (the eventual result of the fetch), not the array of players.
 * - .map() only exists on arrays. A Promise has no .map(), so you get that error.
 *
 * Fix: fetch the data when the component mounts, store the array in React state,
 * then .map() over that state in the render. Use useEffect for the fetch and
 * useState to hold the list.
 */
const PlayerCard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPlayers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/players');
      console.log('response', response);
      const text = await response.json();
      // response.json() throws "unexpected character at line 1" when the server
      // returns HTML (e.g. 404) instead of JSON. Parse manually and catch.
      let data;
      try {
        console.log('text', text);
      } catch (parseErr) {
        setError(`Not JSON (API down or wrong URL?). Status: ${response.status}. Got: ${text.slice(0, 120)}…`);
        setPlayers([]);
        return;
      }
      setPlayers(text);
    } catch (err) {
      setError(err.message || 'Failed to fetch players');
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  if (loading) return <div>Loading players…</div>;
  if (error) return <div className="player-card-error">{error}</div>;

  return (
    <div>
      {players.map((player) => (
        <div key={player._id}>
          <h2>{player.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
