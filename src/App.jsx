import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LogoNodejs } from 'react-ionicons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline text-center text-red-600">Hello world!</h1>

<LogoNodejs
  color={'#00000'}
  height="250px"
  width="250px"
  onClick={() => alert('Hi!')}
/>
    </>
  )
}

export default App
