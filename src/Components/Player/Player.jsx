import { FaFlag } from "react-icons/fa6";
import "../Player/Player.css";
import PropTypes from "prop-types";

import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion'; // Ensure this import is correct
import 'react-toastify/dist/ReactToastify.css'
import '../Toastify/Toastify.css'


const Player = ({ player ,handleSelectedPlayers}) => {
  const {
   id,
    name,
    picture,
    country,
    flag,
    rating,
    role,
    batting_style,
    price,
  } = player;

  const notify = () => toast('Insufficient Credits! Please Try Again',{
    className: 'toast-container',
    bodyClassName: 'toast-body',
    progressClassName: 'toast-progress',
    autoClose: 2000,
    pauseOnHover:false,
  });

  const handleClick = () => {
    const success = handleSelectedPlayers(player, price);
    if (!success) {
      notify();
    } else {
      notify('Player Selected Successfully!');
    }
  };

  return (
    <div className="border-1 p-4 rounded-xl border-gray-300 justify-between">
      <div>
        <img className="w-80 h-50 rounded-2xl" src={picture} alt="" />
      </div>
      <div className="pt-4">
        <div className="pt-4 flex flex-row gap-6 justify-start">
          <img className="w-10" src={flag} alt="" />
          <h1 className="font-bold">{name}</h1>
        </div>
        
        <div className="pt-4 pb-3  flex flex-row gap-6 justify-between items-center">
          <FaFlag />
          <h1>{country}</h1>
          <button className="bg-gray-300 rounded-2xl p-2">{role}</button>
        </div>
        <hr className=" text-gray-300"/>
        <div className="pt-8 flex flex-row gap-6 justify-between items-center">
          <h1>Rating</h1>
          <h1 className="font-bold text-emerald-700">{rating}</h1>
        </div>
        <div className="pt-4 flex flex-row gap-6 justify-between items-center">
          <h1 className="font-bold">{batting_style}</h1>
          <h1>{batting_style}</h1>
        </div>
        <div className="pt-4 flex flex-row gap-6 justify-between items-center">
          <h1 className="font-semibold">Price:  <span className="font-bold text-xl text-amber-900">{price}</span></h1>
          <button  onClick={handleClick}
           className="px-2 bg-indigo-950 text-white font-semibold border-1 border-gray-400 p-1 rounded-xl">
            Choose Player
            
          </button>
          <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
     
      />
        </div>
      </div>
    </div>
  );
};


Player.propTypes = {
  handleSelectedPlayers: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired
}
export default Player;
