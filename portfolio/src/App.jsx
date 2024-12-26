import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App" >
        <div className="scroll-container">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
