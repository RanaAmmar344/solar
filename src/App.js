
import { Routes,Route  } from "react-router-dom"; 
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ChiSiamo from './Components/ChiSiamo';
import Sire from "./Components/Sire";
import Sirefeatures from "./Components/Sirefeatures";
import Sireproduct from "./Components/Sireproduct";

import Work from "./Components/Work";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
    



      <Navbar/>
      <Routes>
      <Route exact path='/'  element={<Home/>} />
      <Route exact path='/chisiamo'  element={<ChiSiamo/>} />
      <Route exact path='/sire'  element={<Sire/>} />
      <Route exact path='/sirefeatures'  element={<Sirefeatures/>} />
      <Route exact path='/sireproduct'  element={<Sireproduct/>} />
      <Route exact path='/work'  element={<Work/>} />
      <Route exact path='/contact'  element={<Contact/>} />
     
      
       </Routes>
    </>
  );
}

export default App;
