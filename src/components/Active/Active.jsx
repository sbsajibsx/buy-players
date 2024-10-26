import { useState } from "react";
import Players from "../Players/Players";
import Selected from "../Selected/Selected";


const Active = ({handleIsActiveState, isActives}) => {

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const handleSelectedPlayers = (player)=>{
        const isExist = selectedPlayers.find((p)=> p.id == player.id);
        if(isExist){
            alert('ache')
        }
        else{
            const newPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newPlayers);
        }
        
    }
    

    return (
        <div>
            <div className="md:flex justify-end items-center my-6 w-11/12 mx-auto">
                
                <div className="flex ">
                    <button onClick={()=>handleIsActiveState('available')} className={`${isActives.available? 'btn bg-yellow-400 hover:bg-red-400': 'btn hover:bg-red-400'}`}>Available</button>
                    <button onClick={()=>handleIsActiveState('selected')} className={`${isActives.available? 'btn hover:bg-red-400': 'btn bg-yellow-400 hover:bg-red-400'}`}>{`Selected (${selectedPlayers.length})`}</button>
                </div>
            </div>
            {
                isActives.available?<div><Players handleSelectedPlayers={handleSelectedPlayers}></Players></div>: <div><Selected></Selected></div>
            }
        </div>
    );
};

export default Active;