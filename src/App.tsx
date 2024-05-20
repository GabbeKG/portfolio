//import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css'
import Portfolio from './Portfolio'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import { Environment, Float, Html, Scroll, ScrollControls } from '@react-three/drei'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Perf } from 'r3f-perf'


function App() {
  const [section, setSection] = useState('presentation');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };
  const spring = useSpring({
    from: {
      x:0
    },
    to: {
      x:100
    }
  })
  const presentationSpring = useSpring({
    opacity: section === 'presentation' ? 1 : 0,
    from: { x: 0 },
    to: {x:100}
  });
  
  const portfolioSpring = useSpring({
    opacity: section === 'portfolio' ? 1 : 0,
    // Add other animation properties if needed, e.g., position
  });
  

  return (
    <>
      <Canvas
        className="r3f"
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, -10],
        }}
      >
         <Perf position="top-right" />

        <Environment
            background
            files={"/HDR/earthlike_planet.hdr"}
            //preset='sunset'
            backgroundRotation={[.1,10.2,0, 'XYZ']}
            >
        </Environment>                
              
        <directionalLight intensity={1} />
        

        <ambientLight />

        {section === 'presentation' && (
          <ScrollControls  damping={.25} distance={.1}>
            <Scroll>

              <Presentation />
            </Scroll>
          </ScrollControls>
        )}

        
        
        {section === 'portfolio' && (



              <Portfolio />
            
        )}
       
      </Canvas>
      

      <NavBar onSectionChange={handleSectionChange} />
      
    </>
  )
}

export default App
