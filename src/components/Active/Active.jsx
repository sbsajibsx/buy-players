import { useState } from "react";
import Players from "../Players/Players";
import Selected from "../Selected/Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Active = ({ handleIsActiveState, isActives }) => {
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
    if (isExist) {
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
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
    }
  };

  return (
    <div>
      <div className="md:flex justify-end items-center my-6 w-11/12 mx-auto">
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
          <Selected handleDelete={handleDelete} selectedPlayers={selectedPlayers}></Selected>
        </div>
      )}
      {/* <ToastContainer /> */}
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
    </div>
  );
};

export default Active;
