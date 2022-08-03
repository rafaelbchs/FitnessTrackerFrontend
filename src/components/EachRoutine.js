import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { addActivityToRoutine, getAllActivities, updateSingleRoutine, updateSingleRoutineActivity } from "../api";

const EachRoutine = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { routine } = location.state;
  const [activities, setActivities] = useState([]);
  const [addActivity, setAddActivity] = useState(false);
  const [updateRoutine, setUpdateRoutine] = useState(false);
  const [updateActivity, setUpdateActivity] = useState(false);
  const [deleteActivity, setDeleteActivity] = useState(false);
  const [deleteRoutine, setDeleteRoutine] = useState(false);
  const [showActivities, setShowActivities] = useState(true);
  const routineId = routine.id
  const currentActivities = routine.activities
  const token = localStorage.getItem("token")

  async function handleAddActivity(event) {
    event.preventDefault();
    setAddActivity(true);
    setShowActivities(false)
  }

  async function handleUpdateRoutine(event) {
    event.preventDefault();
    setShowActivities(false)
    setUpdateRoutine(true)
  }
  async function handleUpdateActivity(event) {
    event.preventDefault();
    setShowActivities(false)
    setUpdateActivity(true)
  }
  async function handleDeleteAcitivity(event) {
    event.preventDefault();
    setShowActivities(false)
  }
  async function handleDeleteRoutine(event) {
    event.preventDefault();
    setShowActivities(false)
  }

  async function handleSubmitActivity(event){
    event.preventDefault();
    const count = event.target[0].value;
    const duration = event.target[1].value;
    const activityId = event.target[2].value;
    const response = await addActivityToRoutine(activityId, count, duration, routineId)
    navigate(`/myroutines`);

  }

  async function handleSubmitUpdateRoutine(event){
    event.preventDefault();
    const name = event.target[0].value;
    const goal = event.target[1].value;
    const response = await updateSingleRoutine(name, goal, routineId, token)
    navigate(`/myroutines`);
  }

  async function handleSubmitUpdateActivity(event){
    event.preventDefault();
    const count = event.target[0].value;
    const duration = event.target[1].value;
    const routineActivityId = event.target[2].value;
    const result = await updateSingleRoutineActivity(count, duration, routineActivityId, token)
    navigate(`/myroutines`);
  }

  useEffect(() => {
    async function getData() {
      const data = await getAllActivities();
      setActivities(data);
    }
    getData();
  }, []);

  return (
    <>
      <h4 style={{ paddingLeft: "2rem", marginTop: "4rem" }}>My Routine</h4>
      <div className="list-group">
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{routine.name}</h5>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={handleAddActivity}
                  >
                    Add Activity
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={handleUpdateRoutine}
                  >
                    Update Routine
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={handleUpdateActivity}
                  >
                    Update Activity
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={handleDeleteAcitivity}
                  >
                    Delete Activity
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={handleDeleteRoutine}
                  >
                    Delete Routine
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mb-1">{routine.goal}</p>
          
        </a>
      </div>
      {
        showActivities ? ( <>
          <h4 className="mb-1" style={{ paddingLeft: "2rem", marginTop: "1rem" }}>
            Activities
          </h4>
          <div className="list-group">

          {
            currentActivities.length === 0 ? (
              <p style={{ marginLeft: "2rem" }}>This routine doesn't have any activities</p>
            ) : null
          }
          {
            currentActivities.map((activity, idx) => {
              return (
              <div key={idx}>
              <a
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5>Set: {activity.name}</h5>
                </div>
                <p>
                 {activity.count} reps
                </p>
                <p>
                  For {activity.duration} seconds
                </p>
              </a>
            </div>
              )
            })
          }
          </div>
        </>):null
      }
      
      {addActivity && (
        <form className="row g-3 justify-content-center" style={{marginTop: "1rem" }} onSubmit={handleSubmitActivity}>
          <div className="col-auto ">
            <input
              type="text"
              className="form-control"
              id="inputtext1"
              placeholder="Count"

            />
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="inputtext2"
              placeholder="Duration"
            />
          </div>
          <div className="col-auto">
          <select  className="form-select">
            <option defaultValue>Choose Activity</option>
              {activities.map((activity, idx) => {
                return (
                  <option  key={idx} value={activity.id}>
                      {activity.name}
                  </option>
                );
              })}
            </select>
            </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add Activity
            </button>
          </div>
        </form>
      )}
      {updateRoutine && (
        <form className="row g-3 justify-content-center" style={{marginTop: "1rem" }} onSubmit={handleSubmitUpdateRoutine}>
          <div className="col-auto ">
            <input
              type="text"
              className="form-control"
              id="inputtext1"
              placeholder="Name"
            />
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="inputtext2"
              placeholder="Goal"
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Update Routine
            </button>
          </div>
        </form>
      )}
      {updateActivity && (
        <form className="row g-3 justify-content-center" style={{marginTop: "1rem" }} onSubmit={handleSubmitUpdateActivity}>
          <div className="col-auto ">
            <input
              type="text"
              className="form-control"
              id="inputtext1"
              placeholder="Count"

            />
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="inputtext2"
              placeholder="Duration"
            />
          </div>
          <div className="col-auto">
          <select  className="form-select">
            <option defaultValue>Choose Activity</option>
              {currentActivities.map((activity, idx) => {
                return (
                  <option  key={idx} value={activity.routineActivityId}>
                      {activity.name}
                  </option>
                );
              })}
            </select>
            </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Update Activity
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EachRoutine;
