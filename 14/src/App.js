import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

 function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<About/>}/>
      <Route path="*" element={<>صفحة لا يتواجد</>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


//---------------------------------------
// npm install react-router-dom
//---------------------------------------
// BrowserRouter        متصفح المسارات 
// Routes                       مسارات
// Route                          مسار 
//---------------------------------------
// Link                           رابط
// NavLink                 رابط التنقل 
//-------------Coder Shiyar--------------

// a









