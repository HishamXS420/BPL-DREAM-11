import { useState } from "react";
import { useEffect } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";


const Available = ({handleSelectedPlayers, setShowAvailable,showSelected}) => {
      const [playerCards, setPlayerCards] = useState([]);

      useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayerCards(data))
      },[])


  

    return (
        <div className="absolute mt-24">
            <div className="flex flex-row justify-between items-center">
                <div>
                <h1 className="text-3xl font-bold">Available Players</h1>
                </div>
                <div>
                    <button className="font-bold rounded-l-2xl text-indigo-100 bg-blue-900 p-4">Available</button>
                    <button onClickCapture={() => setShowAvailable(false)} onClick={handleSelectedPlayers} className="font-bold rounded-r-2xl bg-slate-200 text-black p-4 ">{`Selected (${showSelected.length})`}</button>
                </div>
            </div>
            <hr className="my-4 text-gray-300"/>
            <div className="card-info flex items-center justify-between mt-4 mb-4">

                {
                    playerCards.map(player => <Player 
                        handleSelectedPlayers={handleSelectedPlayers} 
                        key={player.idx} 
                        player={player}></Player>)
                }
            </div>
        </div>
       
    );
};
Available.propTypes = {
    handleSelectedPlayers: PropTypes.func.isRequired
}

export default Available;