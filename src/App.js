import { useEffect, useState } from "react";
import FlashPage from "./components/FlashPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/app.scss"

function App() {

  // const [showSplashScreen, setShowSplashScreen] = useState(true)
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowSplashScreen(false)
  //   }, 2000);
  // }, [])

  return (
    <div className="App">
      {/* {
        showSplashScreen ? <FlashPage/> : null
      } */}
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
