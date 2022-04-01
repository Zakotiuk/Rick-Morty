import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Cards from "./components/pages/Cards/Cards";
import CardById from "./components/pages/CardById/CardsById";
import Navbar_ from "./components/navbar/Navbar";
import Locations from "./components/pages/Locations/Locations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar_/>
      <Routes>
         <Route path='/cards' element={<Cards/>}/>
         <Route path='/cards/:id' element={<CardById/>}/>

         <Route path='/' element={<About/>}/>
         <Route path='/locations' element={<Locations/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
