import React, { useState, useEffect } from "react";
import { createRoutine } from "../api";
import { useNavigate } from "react-router-dom";

const MyRoutines = () => {
    let navigate = useNavigate();
    function handleSubmit(event){
    event.preventDefault();
    const name = event.target[0].value;
    const goal = event.target[1].value;
    const isPublic = event.target[2].checked
    const token = localStorage.getItem("token")
    createRoutine(name, goal, isPublic, token)
    alert("Your routine has been created")
    navigate("/");
    }

    return (
        <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=2300")',
          minHeight: "1000px",
          minWidth: "1000px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="card text-bg-light mb-3 "
            style={{
              minWidth: "350px",
              minHeight: "250px",
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <h5 style={{ textAlign: "center", marginTop: "1rem" }}>
              Create a new routine
            </h5>
            <div className="card-header">
              {localStorage.getItem("username")}
            </div>
            <div className="card-body">
              <p className="card-text">
                <input
                  className="form-control"
                  id="name"
                  autoComplete="off"
                  placeholder="Name of routine..."
                ></input>
              </p>
              <p className="card-text">
                <input
                  className="form-control"
                  id="goal"
                  autoComplete="off"
                  placeholder="Goal of routine..."
                ></input>
              </p>
              <input className="me-2" type="checkbox" value="" id="publicRoutine" defaultChecked />
              <label className="form-check-label" htmlFor="publicRoutine">
                Will the routine be public?
              </label>
              <button
                className="btn btn-secondary btn-sm"
                type="submit"
                style={{marginLeft: "1rem"}}
              >
                Create Routine
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}


export default MyRoutines;