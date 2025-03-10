
import {  useState } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import Claim from './Components/Claim/Claim'
import Header from './Components/Header/Header'
import Selected from './Components/Selected/Selected'

function App() {

  const [credit,setCredit] = useState(0);

  const[showAvailable,setShowAvailable] = useState(true);
  const [showSelected,setShowSelected] = useState([]);



  const handleClaimFreeCredit = ()=> {
    console.log('button')
      const newCredit = credit + 30000;
      setCredit(newCredit);
  }

  const handleSelectedPlayers = (player,price) => {
    console.log(player);
      const newSelected = [...showSelected,player];
      setShowSelected(newSelected);

      if((credit - price)>0){
        const newCoin = credit - price;
        setCredit(newCoin);
      }
      else{
        
      }
     
     
  }

const handleRemovePlayer = (id) =>{
    const afterRemoved = showSelected.filter((select) => select.id!== id);
    setShowSelected(afterRemoved);

}

  return (
    <>
      <div className="md:flex-col mx-auto max-w-6xl">
   
      <Header credit={credit}></Header>
      <Claim handleClaimFreeCredit={handleClaimFreeCredit}></Claim>
      {showAvailable ?  
      <Available showSelected={showSelected} setShowAvailable={setShowAvailable} handleSelectedPlayers={handleSelectedPlayers}></Available> 
      : 
      <Selected handleRemovePlayer={handleRemovePlayer}  showSelected={showSelected} setShowAvailable={setShowAvailable}></Selected>}
     
      

      </div>
    </>
  )
}

export default App
