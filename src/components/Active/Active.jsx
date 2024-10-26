import PropTypes from 'prop-types';
import { useState } from "react";
import Players from "../Players/Players";
import Selected from "../Selected/Selected";
import {  toast } from "react-toastify";


const Active = ({ handleIsActiveState, isActives, handleDeletePrice, prices }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleDelete = (id) =>{
    const removePlayer = selectedPlayers.filter((p) => p.id != id);
    setSelectedPlayers(removePlayer);
    toast.error(' Delete Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }
  const handleSelectedPlayers = (player) => {
    const { name } = player;
    const isExist = selectedPlayers.find((p) => p.id == player.id);
    if(selectedPlayers.length > 5){
        toast.error(' 6 Player Already Added. Please Remove Some Players then Added New Player', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    else if(isExist) {
        toast.warn(` ${name} Already Added`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
            });
    } else {
        handleDeletePrice(player.price)
        if(prices < player.price){
            return;
        }
      else{
        const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
      toast.success(`${name} Successfully Added`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      }
    }
  };

  return (
    <div>
      <div className="md:flex justify-end items-center my-6 w-11/12 mx-auto sticky">
        <div className="flex ">
          <button
            onClick={() => handleIsActiveState("available")}
            className={`${
              isActives.available
                ? "btn bg-yellow-400 hover:bg-red-400"
                : "btn hover:bg-red-400"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("selected")}
            className={`${
              isActives.available
                ? "btn hover:bg-red-400"
                : "btn bg-yellow-400 hover:bg-red-400"
            }`}
          >{`Selected (${selectedPlayers.length})`}</button>
        </div>
      </div>
      {isActives.available ? (
        <div>
          <Players handleSelectedPlayers={handleSelectedPlayers}></Players>
        </div>
      ) : (
        <div>
          <Selected handleIsActiveState={handleIsActiveState} handleDelete={handleDelete} selectedPlayers={selectedPlayers}></Selected>
        </div>
      )}
      {/* <ToastContainer /> */}
      
    </div>
  );
};

Active.propTypes ={
    handleIsActiveState: PropTypes.func.isRequired,
    isActives: PropTypes.object.isRequired,
    handleDeletePrice: PropTypes.func.isRequired,
    prices: PropTypes.object.isRequired
}

export default Active;
