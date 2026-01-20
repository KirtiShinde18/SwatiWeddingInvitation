import './App.css'
import Engagement from './pages/Engagement'
import Home from './pages/Home'

// image backgrounds 
import Bg1 from "./assets/w-1.png"
import Haldi from './pages/Haldi'

// video backgrounds
import VideoBg from "./assets/Videobg.mp4"
import VidhiBg from "./assets/VidhiBg.mp4"
import Vidhi from './pages/Vidhi'
import Wedding from './pages/Wedding'
import { useEffect, useRef, useState } from 'react'

// music 
import BgMusic from "./assets/bgMusic.mp3"
import Location from './pages/Location'
import Notification from './pages/Notification'
import Thank from './pages/Thank'

const App = () => {

  const audioRef = useRef(null);
    const [unlocked, setUnlocked] = useState(false);
  
    useEffect(() => {
      const unlockAudio = () => {
        if (unlocked) return;
  
        const audio = audioRef.current;
        audio.muted = false;
        audio.volume = 0;
        audio.play();
  
        // smooth fade-in
        let vol = 0;
        const fade = setInterval(() => {
          vol += 0.05;
          if (vol >= 1) {
            vol = 1;
            clearInterval(fade);
          }
          audio.volume = vol;
        }, 120);
  
        setUnlocked(true);
        removeListeners();
      };
  
      const removeListeners = () => {
        document.removeEventListener("click", unlockAudio);
        document.removeEventListener("scroll", unlockAudio);
        document.removeEventListener("touchstart", unlockAudio);
      };
  
      document.addEventListener("click", unlockAudio);
      document.addEventListener("scroll", unlockAudio);
      document.addEventListener("touchstart", unlockAudio);
  
      return () => removeListeners();
    }, [unlocked]);


//       // ✅ Smooth Infinite Auto-Scroll
//  useEffect(() => {
//   let animationId;
//   let speed = 0.5;
//   let isPaused = false;

//   const scroll = () => {
//     if (!isPaused) {
//       speed = Math.min(speed + 0.05, 2);
//       window.scrollBy(0, speed);
//     }
//     animationId = requestAnimationFrame(scroll);
//   };

//   const pause = () => {
//     isPaused = true;
//   };

//   const resume = () => {
//     isPaused = false;
//   };

//   // Touch events (mobile)
//   window.addEventListener("touchstart", pause, { passive: true });
//   window.addEventListener("touchend", resume);
//   window.addEventListener("touchcancel", resume);

//   // Mouse events (desktop)
//   window.addEventListener("mousedown", pause);
//   window.addEventListener("mouseup", resume);

//   animationId = requestAnimationFrame(scroll);

//   return () => {
//     cancelAnimationFrame(animationId);
//     window.removeEventListener("touchstart", pause);
//     window.removeEventListener("touchend", resume);
//     window.removeEventListener("touchcancel", resume);
//     window.removeEventListener("mousedown", pause);
//     window.removeEventListener("mouseup", resume);
//   };
// }, []);

  return (
    <>

    <Notification/>
    {/* Background music  */}
    <audio ref={audioRef} src={BgMusic} autoPlay loop muted playsInline/>


      {/* First Section */}
      <div
        style={{
          backgroundImage: `url(${Bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          marginBottom: "5px"
        }}
      >
        <Home />
      </div>

      {/* Second Section with video background */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          marginBottom: "5px"
        }}
      >
      <video
        src={VideoBg}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // background behind content
    
        }}
      />

  {/* Content On top */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
       marginBottom: "5px"
    }}
  >
    <Engagement />
  </div>
</div>


      {/* Other Sections  */}
    <div
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/2a/ee/46/2aee466cffc867c8d5c04824726375c0.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          marginBottom: "5px"
        }}
      >
        {/* content goes here */}
        <Haldi/>
    </div>


    {/* vidhi section  */}
    {/* Third Section with another video background */}
<div
  style={{
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    marginBottom: "5px",
  }}
>
  <video
    src={VidhiBg}
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    }}
  />

  {/* Content on top */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    }}
  >
    {/* Add component here */}
    <Vidhi/>
  </div>
</div>

{/* another section  */}
<div
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/1c/eb/99/1ceb99e9fb9e0c3aec1741cb93494786.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          marginBottom: "5px"
        }}
      >
        {/* content goes here */}
        <Wedding/>
</div>

{/* another section  */}
<div
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/20/07/77/200777700201f0b5c132d6acc5a5c61a.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          marginBottom: "5px"
        }}
      >
        {/* content goes here */}
        <Location/>
</div>

{/* another section  */}
<div
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/9f/1e/79/9f1e79961bce32d5ac4f831d849d5e9b.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          marginBottom: "5px"
        }}
      >
        {/* content goes here */}
        <Thank/>
</div>

      
    </>


  )
}

export default App
