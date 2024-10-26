import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const Player = ({ player, handleSelectedPlayers }) => {
  console.log(Player);
  const { name, price, country, hand, img, rating } = player;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="p-4">
          <img className="md:h-96 w-full rounded-2xl" src={img} alt="Shoes" />
        </figure>
        <div className="card-body space-y-3">
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
            <div className="flex justify-between items-center">
              <p className="flex items-center gap-0">
                Price:
                <FaDollarSign />
                {price}
              </p>
              <div>
                <button onClick={()=>handleSelectedPlayers(player)} className="btn">Choose Player</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes ={
  player: PropTypes.object.isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
  
}

export default Player;
