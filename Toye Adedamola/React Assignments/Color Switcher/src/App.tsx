import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");

  const generateRandomColor = ()=> {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){ //loops 6 time  since hex code contains 6 digits
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  };

  const changeColor = () => {
    const newColor = generateRandomColor();
    setColor(newColor);
  };

  return (
    <>
    <h1>Color Switcher</h1>
     <div className = "color-box" style ={{
      backgroundColor: color}}></div>
     <button onClick = {changeColor}>Change Color</button>
    </>
  )
}

export default App
