import { HashRouter, Route, Routes } from 'react-router-dom';



import Services from './pages/Services';
import Music from './pages/Music';
import Homepage from './pages/Homepage';
import Support from './pages/Support';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';



function App() {
  return (
    <HashRouter>
  
       <div className="App">
        <BackToTop/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes> 
      </div>
  
    </HashRouter>
        
       
    
    
    
  );
}

export default App;
