import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";

const Selected = ({ selectedPlayers, handleDelete, handleIsActiveState }) => {
    // const {img, name, hand} = selectedPlayers;
    // console.log(selectedPlayers)
  return (
    <div>
      <div className="w-11/12 mx-auto mb-52">
        <div className="text-3xl font-bold mb-3">{`Selected Players(${selectedPlayers.length} / 6)`}</div>
        {selectedPlayers.map((player) => (
            <div key={player.id}>
            <div className="mb-3 p-4 border bg-slate-300 rounded-lg flex justify-between items-center">
                <div className="flex items-center">
                    <div>
                        <img className="w-20 h-20 rounded-xl" src={player.img} alt="" />
                    </div>
                    <div className="ml-4 space-y-1">
                        <p className="text-2xl font-bold">{player.name}</p>
                        <p className="text-slate-700">{player.hand}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=> handleDelete(player.id)} className="text-red-600 text-4xl"><MdDeleteForever /></button>
                </div>
            </div>
          </div>
        ))}
        <button onClick={() => handleIsActiveState("available")} className="btn bg-green-500 hover:bg-red-400">Add More Player</button>
      </div>
      
    </div>
  );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleIsActiveState: PropTypes.func.isRequired
}

export default Selected;
