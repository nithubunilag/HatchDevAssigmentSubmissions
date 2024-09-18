import { useState } from 'react'

import './App.css'

function App() {
    const [isVisible, setVisibility] = useState(true);

    const toggleVisibility = () => {
      setVisibility(!isVisible);
    }

  return (
    <>
      <h1>Toggle Text</h1>
      <p>Click the button to hide or show text</p>
      {isVisible && <p className='text-toggled'>Hello, Toyibah</p>}
      <button onClick = {toggleVisibility}>
          {isVisible? "Hide Text" : "Show Text"}
      </button>
    </>
  )
}

export default App
