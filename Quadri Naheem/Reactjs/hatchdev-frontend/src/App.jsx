import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './button'


function App() {
  const [count, setCount] = useState(0)
  const [userObject,setUserObject] = useState({email:'',name:'',age:12});
  const [loginData,setLoginData] = useState({email:'',password:''});
  const [toggle, setToggle] = useState(true);
  let num = 10;

  useEffect(()=>{setTimeout(()=>{alert('Welcome')},5000)},[]);

  const handleClick = () =>{
    //alert(`${loginData.email} ${loginData.password}`);
    alert('Hi');
    //setUserObject({...userObject, name:name, age:14});

  }
  const toggleVisibility = () =>{
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <form action=''>
          <input type='email' onChange={(old)=>setLoginData({...loginData, email:old.target.value})}/>
          <input type='password' onChange={(old)=>setLoginData({...loginData, password:old.target.value})}/>
        </form>
        <div onCick={()=>handleClick()}>
          <MyButton textContent={'Submit'}/>
        </div>
        <div>
        {toggle && <p>Toggle My Visibility</p>}
      <button onClick={toggleVisibility}>Toggle</button>
    </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
