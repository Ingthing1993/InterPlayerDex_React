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
const PlayerCard = ({ image, name, position, birthdate }) => {
  console.log('playerData for PlayerCard', name, position, birthdate);
  return (
    <div className="player-card">
      <div className="player-card-image">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <p> {position}</p>
      <p>{birthdate}</p>
    </div>
  );
};
export default PlayerCard;
