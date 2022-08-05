import React, { useState, useEffect } from "react";
import { createRoutine } from "../api";
import { useNavigate, Link } from "react-router-dom";
import { getPublicRoutinesByUser } from "../api";

const MyRoutines = () => {
  let navigate = useNavigate();
  const [MyRoutines, setMyRoutines] = useState([]);
  const { username } = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getData() {
      const data = await getPublicRoutinesByUser(username, token);
      setMyRoutines(data);
    }
    getData();
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const goal = event.target[1].value;
    const isPublic = event.target[2].checked;
    const token = localStorage.getItem("token");
    const response = await createRoutine(name, goal, isPublic, token);
    navigate(`/`);
  }

  return (
    <>
      <div>
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
              <input
                className="me-2"
                type="checkbox"
                value=""
                id="publicRoutine"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="publicRoutine">
                Will the routine be public?
              </label>
              <button
                className="btn btn-secondary btn-sm"
                type="submit"
                style={{ marginLeft: "1rem" }}
              >
                Create Routine
              </button>
            </div>
          </div>
        </form>
      </div>
      <h4 style={{ paddingLeft: "2rem" }}>My Routines</h4>
      <div className="list-group">
        {MyRoutines.map((routine, idx) => {
          return (
            <div key={idx}>
              <Link
                to={`/myroutines/${routine.creatorId}/${routine.id}`}
                className="list-group-item list-group-item-action"
                aria-current="true"
                state={{ routine: routine }}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1"> {routine.name}</h5>
                </div>
                <p className="mb-1">{routine.goal}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
