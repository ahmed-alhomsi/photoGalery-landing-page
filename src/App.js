import './App.css';
import Navbar from "./components/Navbar"
import AdsSlider from './components/AdsSlider';
import Images from "./components/Images"
import Loading from "./components/Loading"
import { useState, useEffect } from "react"
import info from "./info"

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [images, setImages] = useState(info);
  const [isEnglish, setIsEnglish] = useState(true);

  function toggleTheme() {
    setIsDarkMode(prevIsDark => !prevIsDark);
  }

  function toggleLanguage() {
    setIsEnglish(prevIsEnglish => !prevIsEnglish);
  }

  useEffect(() => {
    // REMEMBER TO SET LOADING TO FALSE BACK AGAIN!!
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 5000)    
  }, [])
  

  if(loading) {
    return <Loading />
  }
  return (
    <div className="App" id={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <AdsSlider />
      <main className='container'>
        <Images isEnglish={isEnglish} images={images} />
      </main>
    </div>
  );
}

export default App;
