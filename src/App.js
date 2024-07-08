import logo from './logo.svg';
import './App.css';
import Portfolio from './Pages/Portfolio';
import Index from '.';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Link } from "react-router-dom";
import write_ups from './Pages/WriteUps'
import WriteUpForm from './Pages/WriteUpForm';
function App() {
  return (
  <BrowserRouter>
    <div className="App">
      
      <Routes>  
        <Route index element={<Index />}/>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/writeups' element={<write_ups />}/>
        <Route path='/writeupform' element={<WriteUpForm/>}/>
        <Route path="*" element={<Index/>}/>
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
