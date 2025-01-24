import PropTypes from "prop-types";
import { FaUser, FaFlag, FaDollarSign } from "react-icons/fa";

const Player = ({ player, handleSelectedPlayers }) => {
  console.log(player);

  const { name, price, country, hand, img, rating } = player;

  return (
    <div className="card card-compact bg-base-100 shadow-xl h-full">
      <figure>
        <img
          className="w-full h-[400px] object-cover rounded-2xl py-6"
          src={img}
          alt={name}
        />
      </figure>
      <div className="card-body flex flex-col justify-between space-y-3">
        <div>
          <h2 className="card-title">
            <FaUser /> {name}
          </h2>
          <div className="flex justify-between items-center">
            <p className="flex gap-2 items-center">
              <FaFlag />
              {country}
            </p>
            <p className="border rounded-xl p-2 text-center bg-slate-200">
              All Rounder
            </p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className="font-bold">Rating</p>
            <p className="flex justify-end text-slate-400">{rating}</p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p>Bat Hand</p>
              <p className="text-slate-400 justify-end flex">{hand}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-1">
            Price: <FaDollarSign /> {price}
          </p>
          <button onClick={() => handleSelectedPlayers(player)} className="btn">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    hand: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
};

export default Player;
