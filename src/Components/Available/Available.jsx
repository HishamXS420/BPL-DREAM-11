import { useState } from "react";
import { useEffect } from "react";

const Available = () => {
      const [playerCard, setPlayerCard] = useState([]);

      useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayerCard(data))
      },[])

    return (
        <div className="absolute mt-24">
            <h1 className="text-3xl font-bold">Available Players</h1>
            <div className="card">

                {
                    
                }
            </div>
        </div>
       
    );
};


export default Available;