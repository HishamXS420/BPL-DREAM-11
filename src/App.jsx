
import { useEffect, useState } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import Claim from './Components/Claim/Claim'
import Header from './Components/Header/Header'

function App() {

  const [credit,setCredit] = useState(0);




  const handleClaimFreeCredit = ()=> {
    console.log('button')
      const newCredit = credit + 30000;
      setCredit(newCredit);
  }

  return (
    <>
      <div className="md:flex-col mx-auto max-w-6xl">
   
      <Header credit={credit}></Header>
      <Claim handleClaimFreeCredit={handleClaimFreeCredit}></Claim>
      <Available ></Available>
      </div>
    </>
  )
}

export default App
