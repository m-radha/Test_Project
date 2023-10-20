import React from 'react'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'

const StartButton = () => {
    const navigate=useNavigate();
    
    const handleStart = () => {
        navigate("/form1");
    }
  return (
    <div>
      <button onClick={handleStart}>start</button>
    </div>
  )
}

export default StartButton
