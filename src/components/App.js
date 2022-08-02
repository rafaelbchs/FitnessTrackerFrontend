import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register"
import Navbar from "./Navbar"
import Login from "./Login"
const App = () => {
    const [token, setToken] = useState("");
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Navbar
        token={token}/>} />

        <Route path="/login" element = {<Login 
        setToken={setToken}
        />} />
        <Route path="/register" element = {<Register
        setToken={setToken}
        />} />
        
        </Routes>
        </BrowserRouter>

    )   
}

export default App;