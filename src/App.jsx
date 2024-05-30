import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Homeheader from './Components/Homehaeder/Homeheader';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Homeheader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    
  
    </div>
  );
}

export default App;
