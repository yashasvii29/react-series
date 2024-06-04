import React from 'react'
import {useState} from 'react';

const App = () => {

  const [length,setlength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState(" ")
  return (
    <div>
      <h1 className='text-white text-center mt-4 text-5xl'>Password Generator</h1>
    </div>
  )
}

export default App