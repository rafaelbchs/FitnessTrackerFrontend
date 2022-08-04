import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createActivity, getAllActivities } from "../api";

const Activities = () => {
  let navigate = useNavigate();
  const [allActivities, setAllActivities] = useState([]);
  const token = localStorage.getItem("token");
  const [errorAddActivity, setErrorAddActivity] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(true);
  const [addNewActivity, setAddNewActivity] = useState(false);
  const [successAddingActivity, setSucessAddingActivity] = useState(false);

  async function handleSucess(event) {
    event.preventDefault();
    setSucessAddingActivity(false);
  }
  async function handleError(event) {
    event.preventDefault();
    setErrorAddActivity(false);
  }

  async function handleClick(event) {
    event.preventDefault();
    setShowAllActivities(false);
    setAddNewActivity(true);
  }

  async function handleSubmitActivity(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const description = event.target[1].value;
    const response = await createActivity(name, description, token);
    if (response.error) {
      setErrorAddActivity(true);
      return;
    }
    setErrorAddActivity(false)
    navigate("/activities");
    setShowAllActivities(true);
    setAddNewActivity(false);
    setSucessAddingActivity(true)
  }

  useEffect(() => {
    async function getData() {
      const data = await getAllActivities();
      setAllActivities(data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="d-flex" style={{ marginTop: "4rem", marginLeft: "2rem" }}>
        <h3 className="me-auto">Activities</h3>
        {token && (
          <button
            type="button"
            className="btn btn-secondary btn-sm mb-3 me-5"
            onClick={handleClick}
          >
            Create new
          </button>
        )}
      </div>
      {errorAddActivity && (
        <div
          className="alert alert-danger text-center w-25 mx-auto"
          role="alert"
        >
          That activity already exists!
          <button
            type="button"
            className="btn-close ms-5"
            aria-label="Close"
            onClick={handleError}
          ></button>
        </div>
      )}
      {successAddingActivity && (
        <div
          className="alert alert-success text-center w-25 mx-auto"
          role="alert"
        >
          Your activity has been added!
          <button
            type="button"
            className="btn-close ms-5"
            aria-label="Close"
            onClick={handleSucess}
          ></button>
        </div>
      )}
      {showAllActivities && (
        <div className="list-group">
          {allActivities.map((activity, idx) => {
            return (
              <div key={idx}>
                <a
                  aria-current="true"
                  className="list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{activity.name}</h5>
                  </div>
                  <p className="mb-1">{activity.description}</p>
                </a>
              </div>
            );
          })}
        </div>
      )}

      {addNewActivity && (
        <form
          className="row g-3 justify-content-center"
          style={{ marginTop: "1rem" }}
          onSubmit={handleSubmitActivity}
        >
          <div className="col-auto ">
            <input
              type="text"
              className="form-control"
              id="inputtext11"
              placeholder="Name"
            />
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="inputtext22"
              placeholder="Description"
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add Activity
            </button>
          </div>
        </form>
      )}
    </>
  );
};
export default Activities;
