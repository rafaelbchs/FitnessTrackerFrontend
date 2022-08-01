import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar"
import Login from "./Login"
const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Navbar/>} />

        <Route path="/login" element = {<Login/>} />
        
        </Routes>
        </BrowserRouter>

    )   
}

export default App;