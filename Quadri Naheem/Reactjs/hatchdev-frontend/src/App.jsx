import { useEffect, useState } from 'react'
import './App.css'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState('Select Option');
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const nameOption =(value)=>{
      setOption(value)
    }

  return (
    <body onClick={()=>{toggleDropdown();nameOption('Select Option')}}>
    <div className="App">
      <h1>Dropdown Menu Example</h1>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          {option}
        </button>
        {isOpen && (
          <ul className="dropdown-menu" style={{ listStyleType: 'none', padding: 0 }}>
            <li onClick={(e)=>{nameOption('Option 1');toggleDropdown();e.stopPropagation()}} style={{ padding: '10px', cursor: 'pointer' }}>Option 1</li>
            <li onClick={(e)=>{nameOption('Option 2');toggleDropdown();e.stopPropagation()}} style={{ padding: '10px', cursor: 'pointer' }}>Option 2</li>
            <li onClick={(e)=>{nameOption('Option 3');toggleDropdown();e.stopPropagation()}} style={{ padding: '10px', cursor: 'pointer' }}>Option 3</li>
          </ul>
        )}
      </div>
    </div>
    </body>
  );
};

export default App
