import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Navbar from "./Navbar";
import Login from "./Login";
import Routines from "./Routines";
import RoutineActivities from "./RoutineActivities";
import MyRoutines from "./MyRoutines";

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
        <Route 
            path="/routines/:creatorName/:routineId"
            element={<RoutineActivities />}
        />
        <Route 
            path="/myroutines"
            element={<MyRoutines/>}
        />
        </Route>
        <Route 
            path="/myroutines/:creatorId/:routineId"
            element={<MyRoutines />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
