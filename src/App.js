import Home from "./pages/Home";
import Thankyou from "./pages/Thankyou";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
      
        <Route path="/thanks"  element={<Thankyou />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
