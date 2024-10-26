import { useState } from "react";
import Players from "../Players/Players";


const Active = ({handleIsActiveState, isActives}) => {

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const handleSelectedPlayers = (player)=>{
        const newPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newPlayers);
    }
    console.log(selectedPlayers)

    return (
        <div>
            <div className="md:flex justify-between items-center my-6 w-11/12 mx-auto">
                <div className="text-3xl font-bold">{`${isActives.available? 'Avaibable Players': 'Selected Players'}`}</div>
                <div className="flex ">
                    <button onClick={()=>handleIsActiveState('available')} className={`${isActives.available? 'btn bg-yellow-400 hover:bg-red-400': 'btn hover:bg-red-400'}`}>Available</button>
                    <button onClick={()=>handleIsActiveState('selected')} className={`${isActives.available? 'btn hover:bg-red-400': 'btn bg-yellow-400 hover:bg-red-400'}`}>Selected</button>
                </div>
            </div>
            {
                isActives.available?<div><Players handleSelectedPlayers={handleSelectedPlayers}></Players></div>: 'waiting'
            }
        </div>
    );
};

export default Active;