import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register"
import Navbar from "./Navbar"
import Login from "./Login"
const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Navbar/>} />

        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
        
        </Routes>
        </BrowserRouter>

    )   
}

export default App;