import './App.css';
import Portfolio from './Pages/Portfolio';
import Index from '.';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteUpForm from './Pages/WriteUpForm';
import Navbar from './components/navbar';
import Ctf_creations from './Pages/CTF_creations';
import About_me from './Pages/about_me';
import Write_ups from './Pages/WriteUps';

function App() {
  return (
  
  <BrowserRouter>
    <div className="App">
    
      <Routes>  
        <Route index element={<Index />}/>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/writeups' element={<Write_ups />}/>
        <Route path='/writeupform' element={<WriteUpForm/>}/>
        <Route path='/ctf' element={<Ctf_creations/>}/>
        <Route path="/about_me" element={<About_me/>}/>
        <Route path="*" element={<Index/>}/>
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
