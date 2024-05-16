//import { useFrame } from '@react-three/fiber'
import {
    //Stage,
    //Lightformer,
    Environment,
    //Sky,
    //ContactShadows,
    //RandomizedLight,
    //AccumulativeShadows,
    //SoftShadows,
    //BakeShadows,
    //useHelper,
    PresentationControls,
    ScrollControls,
    useGLTF,
    Html,

    Scroll,
    Float,
} from '@react-three/drei'
//import { useFrame, useThree } from '@react-three/fiber'
//import { useRef } from 'react'

import { Perf } from 'r3f-perf'


//import { useRef } from 'react'
//import { Camera } from 'three'
//import * as THREE from 'three'
//import hdr from './assets/HDR/earthlike_planet_close.hdr'
//import { useControls } from 'leva'

export default  function Portfolio() {
    
    //const camera = useThree(state => state.camera)
    //const keyboard = useGLTF('./src/assets/Models/keyboard2.gltf')
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    computer.scene.rotation.y = (Math.PI / 2.2 * 3)
    computer.scene.position.set(1,-1.5,-5)
    
    phone.scene.rotation.y = -Math.PI / 2 * 2.5
    phone.scene.position.x = -2.7
    phone.scene.position.y=-.2
    phone.scene.position.z = -8
    phone.scene.scale.set(.3,.3,.3)
    
    
    
    
    
    
    //TEST

    //
    

    return <>
            {/*<color args={ [ 'ivory' ] } attach="background" />*/}
        <Perf position="top-left" />
        {/*<OrbitControls makeDefault enableZoom={false} />*/}
        <Environment
            background
            files={"src/assets/HDR/earthlike_planet.hdr"}
            //preset='sunset'
            backgroundRotation={[.1,10.2,0, 'XYZ']}
        >

        </Environment>
        <ScrollControls>
            <Scroll>
                
        <Html className='portfolio-content-container'>
            <div id='portfolioContainer' style={{width:'30vw'}}>

        
                <h2 style={{  color: 'white', fontSize: '2rem', zIndex: 100 }}>
                    State of JavaScript</h2>
                <p>This was a assignment we recieved where we were going to recreate the statistics page from "State of JavaScript" with a javascripts framework of our choice.</p>
                {/*TEST TEXT*/}
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium lectus quam. Mi bibendum neque egestas congue quisque egestas diam in arcu. Pretium quam vulputate dignissim suspendisse in. Molestie at elementum eu facilisis sed odio morbi quis. Diam volutpat commodo sed egestas egestas. Ut consequat semper viverra nam libero justo laoreet sit. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Non consectetur a erat nam at lectus urna. In vitae turpis massa sed elementum tempus egestas.

  </p>
            
            </div>
            </Html>
            <PresentationControls
            
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.075 ] }
            config={ { mass: 2, tension: 2000 } }
            snap={ { mass: 4, tension: 400 } }
            >
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                    />

                <primitive
                    object={ computer.scene }
                    
                    // rotation-x={ 0.13 }
                    >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ -0.03, 1.55, - 1.4 ] }
                        rotation-x={ - 0.256 }
                        >
                        <iframe style={{borderRadius:'25px'}} width={1000} height={690} src="https://fascinating-rolypoly-779f41.netlify.app/retention/" />
                    </Html>
            </primitive>
        <directionalLight  intensity={1}/>
        </PresentationControls>
        <PresentationControls
         enabled
         rotation={ [ 0.13, 0.1, 0 ] }
         polar={ [ - 0.04, -0.02 ] }
         azimuth={ [ - .01, 0.0001 ] }
         config={ { mass: 100, tension: 2000 } }
         snap={ { mass: 1.5, tension: 2000 } }
         >

            <primitive
                    object={ phone.scene }
                    
                    // rotation-x={ 0.13 }
                    >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ .16, 1.34, .1  ] }
                        rotation-x={ - 0 }
                        >
                        <iframe style={{borderRadius:'55px'}} width={510} height={1085} src="https://fascinating-rolypoly-779f41.netlify.app/retention/" />
                    </Html>
                </primitive>
                        </PresentationControls>
        
                            </Scroll>
                            
                                 
                                </ScrollControls>
    </>
        
}