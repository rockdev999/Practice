import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PageCounter } from "./components/PageCounter";
import { Clock } from "./components/Clock";
import { TrafficLigth } from "./components/TrafficLigth";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/counter" element={<PageCounter/>}/>
        <Route path="/clock" element={<Clock />}/>
        <Route path="/traffic-ligth" element={<TrafficLigth />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// agregar un navbar --LISTO
// hacer un PageCounter --LISTO
// diferencias entre == y === en TS --PENDIENTE
// mejorar el semaforo con enums --LISTO
// memoiza --PENDIENTE
// mejorar en useRef --PENDIENTE