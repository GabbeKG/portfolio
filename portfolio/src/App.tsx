//import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css'
import Portfolio from './Portfolio'
import NavBar from './components/NavBar'
import Loader from './components/Loader'
import { Suspense } from 'react'
import { Html } from '@react-three/drei'

function App() {
  
  return (
    <>

                    


    <Canvas
    className="r3f"
    camera={ {
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, -10],
      
      
    } }
    >
        <NavBar/>
       
      
      <ambientLight />
        
      <Portfolio>
        
      </Portfolio>
      
      
        
      </Canvas>
   
  
      </>
  )
}

export default App
