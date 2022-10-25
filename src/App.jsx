import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quotebox from './assets/components/Quotebox'
import Share from './assets/components/Share'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
    <Quotebox />
    <Share />




    </div>
      
  )
}

export default App
