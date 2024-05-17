import { Html, Scroll, ScrollControls, Stage } from "@react-three/drei";


export default function NavBar() {
    

    return (
        <>
            <ScrollControls enabled pages={1}>
                <Scroll>


            <Html
                fullscreen
                wrapperClass="NavComponent"
                style={{transform:'translate3d(33vw,-20px,15px)', position:'fixed', }}
                
                
                >
                    
        <header id="Header" style={{position:'sticky'}}>
            <nav>
                <ul>
                    <li>Start</li>
                    <li>Skills</li>
                    <li>Showcase</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
</Html>
                    </Scroll>
                </ScrollControls>
       
            
        </>
    )
}