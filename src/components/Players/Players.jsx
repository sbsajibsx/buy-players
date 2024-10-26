import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({handleSelectedPlayers}) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <div className="w-11/12 mx-auto mb-52">
      <div className="text-3xl font-bold mb-3">Available Players</div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 space-y-3">
          {players.map((player) => (
            <Player key={player.id} handleSelectedPlayers={handleSelectedPlayers} player={player}></Player>
          ))}
        </div>
      </div>
    </div>
  );
};

Players.propTypes = {
    handleSelectedPlayers: PropTypes.func.isRequired
}

export default Players;
