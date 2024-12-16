import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { ThreeInRow } from "./page/ThreeInRow";
import { BoardVersion1 } from "./page/BoardVersion1";
import { BoardVersion2 } from "./page/BoardVersion2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/three-in-row" element={<ThreeInRow />}/>
        <Route path="/boardversion1" element={<BoardVersion1 />}/>
        <Route path="/boardversion2" element={<BoardVersion2 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
