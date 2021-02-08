import React,{useRef,useEffect} from "react";
import './App.css';
import Dummy from "./Component/Dummy";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSpring, animated} from 'react-spring';
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  // const baseRef = useRef();
  // const [y, setY] = useSpring(() => ({
  //   from: { y: mainRef?.current?.scrollTop || 0 },
  //   onFrame: props => {
  //      mainRef.current.scrollTop = props.y
  //   },
  // }));

  // useEffect(() => {
  //   Aos.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //   });
  // },[]);

 
  //const props = useSpring({ scroll: 100, from: { scroll: baseRef} })
  return (
    <div >
     {/* data-aos="slide-up" */}
    
     {/* <animated.div style={props}
     > */}
   
       <Dummy/>
      
     {/* <div ref={baseRef}/> */}

    
     {/* </animated.div> */}
    
 
    </div>
  );
}

export default App;
