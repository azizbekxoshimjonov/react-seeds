import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Seedraall from './Pages/Seedra/Seedraall';
import Ourblog from './Pages/Blogour/Ourblog';
import Payment from './Pages/Payment/Payment';
import Contact from './Pages/Contacts/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Seedraall' element={<Seedraall/>}/>
        <Route path='/Ourblog' element={<Ourblog/>}/>
        <Route path='/Payment'element={<Payment/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
    
  
    </div>
  );
}

export default App;
