import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Navbar from "./Navbar";
import Login from "./Login";
import Routines from "./Routines"

const App = () => {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={<Navbar token={token} setToken={setToken} />}
        >

        <Route 
            path="/login" 
            element={<Login setToken={setToken} />} 

        />
        <Route 
            path="/register" 
            element={<Register setToken={setToken} />} 
        />
        <Route 
            path="/routines" 
            element={<Routines />} 
        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
