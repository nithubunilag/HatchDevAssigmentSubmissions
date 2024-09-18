import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("");

  return (
    <>
    <h1>Input Mirror</h1>
    <p>Enter a text in the input field and it will be displayed below it in real time</p>
      <input type = "text"
      placeholder="Type something...."
      value = {text}  //Whatever value is typed in this input field will be stored in the text state
      onChange={(event) => setText(event.target.value)}
      //when you type something in the input field, it captures the current value of the input and updates the text state with the value typed
      />
      <p className='displayedText'>{text}</p>
    </>
  )
}

export default App
