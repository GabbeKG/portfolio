//import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css'
import Portfolio from './Portfolio'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import { Environment, Scroll, ScrollControls } from '@react-three/drei'
import { useState } from 'react'


function App() {
  const [section, setSection] = useState('presentation');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };

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
        <Environment
            background
            files={"/HDR/earthlike_planet.hdr"}
            //preset='sunset'
            backgroundRotation={[.1,10.2,0, 'XYZ']}
            >
        </Environment>                
            <directionalLight intensity={1} />
        {section === 'presentation' && (
          <ScrollControls pages={5}>
            <Scroll>
              <ambientLight />
              <Presentation />
            </Scroll>
          </ScrollControls>
        )}
        {section === 'portfolio' && (
          <ScrollControls pages={10}>
            <Scroll>
              <Portfolio />
            </Scroll>
          </ScrollControls>
        )}
      </Canvas>
      <NavBar onSectionChange={handleSectionChange} />
    </>
  )
}

export default App
