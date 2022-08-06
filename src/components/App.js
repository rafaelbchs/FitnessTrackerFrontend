import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Navbar from "./Navbar";
import Login from "./Login";
import Routines from "./Routines";
import RoutineActivities from "./RoutineActivities";
import MyRoutines from "./MyRoutines";
import EachRoutine from "./EachRoutine";
import Activities from "./Activities";
import RoutinesByUser from "./RoutinesByUser";
import ActivitiesByName from "./ActivitiesByName";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";


const App = () => {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar token={token} setToken={setToken} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/routines" element={<Routines />} />
          <Route
            path="/routines/:creatorName/:routineId"
            element={<RoutineActivities />}
          />
          <Route path="/myroutines" element={<MyRoutines />} />
          <Route
            path="/myroutines/:creatorId/:routineId"
            element={ <EachRoutine /> }
          />
          <Route path="/activities" element={<Activities />} />
          <Route path="/routines/:creatorName" element={<RoutinesByUser />} />
          <Route
            path="/activities/:activityId/:activityName"
            element={<ActivitiesByName />}
          />
        <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
