import { useState } from "react";
import "./App.css";
import Available from "./Components/Available/Available";
import Claim from "./Components/Claim/Claim";
import Header from "./Components/Header/Header";
import Selected from "./Components/Selected/Selected";

import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion"; // Ensure this import is correct
import "react-toastify/dist/ReactToastify.css";
import "../src/Components/Toastify/Toastify.css";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";

function App() {
  const [credit, setCredit] = useState(1000000);

  const [showAvailable, setShowAvailable] = useState(true);
  const [showSelected, setShowSelected] = useState([]);

  const notifyError = () => {
    toast.error("Insufficient Credits! Please Try Again", {
      autoClose: 1200,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };

  const notifySuccess = () => {
    toast.success("Player Selected Successfully!", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };

  const notifySuccessCredit = () => {
    toast.success("Congratulations! You have received 30000 credits !", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };
  const notifyAlreadySelected = ({ player }) => {
    toast.error(
      `You have already selected 
      ${player.name} !`,
      {
        autoClose: 1000,
        pauseOnHover: false,
        closeOnClick: true,
        // draggable: false,
      }
    );
  };
  const notifyCannotSelectMore = () => {
    toast.error(
      `You cannot select more than SIX players! `,
      {
        autoClose: 1000,
        pauseOnHover: false,
        closeOnClick: true,
        // draggable: false,
      }
    );
  };
  const notifyPlayerRemoved = ({name}) => {
    toast.info(
      `${name} Removed Successfully! `,
      {
        autoClose: 1000,
        pauseOnHover: false,
        closeOnClick: true,
        // draggable: false,
      }
    );
  };

  const handleClaimFreeCredit = () => {
    console.log("button");
    const newCredit = credit + 30000;
    setCredit(newCredit);
    notifySuccessCredit();
  };

  const handleSelectedPlayers = (player, price, id) => {
    // console.log(player);

    const selectedPlayer = showSelected.find((selection) => selection.id == id);

    
     if(showSelected.length==6){
      notifyCannotSelectMore();
    }
    else if (selectedPlayer) {
      notifyAlreadySelected({ player });
    }
    else {
      if (credit - price > 0) {
        const newCoin = credit - price;
        setCredit(newCoin);
        notifySuccess();
        const newSelected = [...showSelected, player];
        console.log("working");
        setShowSelected(newSelected);
      } else {
        notifyError();
      }
     

    
    }
  };

  const handleRemovePlayer = (id,name) => {
    const afterRemoved = showSelected.filter((select) => select.id !== id);
    setShowSelected(afterRemoved);
    notifyPlayerRemoved({name});
  };

  return (
    <>
    <div>
    <div className="md:flex-col mx-auto max-w-6xl">
        <Header credit={credit}></Header>
        <Claim handleClaimFreeCredit={handleClaimFreeCredit}></Claim>
        {showAvailable ? (
          <Available
            showSelected={showSelected}
            setShowAvailable={setShowAvailable}
            handleSelectedPlayers={handleSelectedPlayers}
          ></Available>
        ) : (
          <Selected
            handleRemovePlayer={handleRemovePlayer}
            showSelected={showSelected}
            setShowAvailable={setShowAvailable}
          ></Selected>
        )}
        <Newsletter></Newsletter>
        
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover={false} // Ensure consistent behavior
          draggable
          theme="dark"
        />
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
      
    </>
  );
}

export default App;
