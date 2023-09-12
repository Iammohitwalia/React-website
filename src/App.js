import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Header from "./Header";
import Footer from "./footer";
import Error from "./Error";
function App() {
  return (
<Router>
    <Header />
<Routes>
   <Route path='/' element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path='*' element={<Error/>}/>
</Routes>
<Footer/>
</Router>
  );
}

export default App;
