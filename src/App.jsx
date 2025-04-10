import { useState } from 'react'
import './App.css'
import FamilyCard from './components/familyCard';

function App() {
  const [family,setFamily] = useState(["Neo", "Jarina Begum", "Vijaya Mohan"]);

  function check(no){
    alert(`family member ${no} is clicked`)
  }

  return (
    <>
      {
        family.map((ele=>(
          <FamilyCard memberno={ele} clikerFunction = {check}/>
        )))
      }
    </>
  )
}

export default App