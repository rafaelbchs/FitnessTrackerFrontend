import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createActivity, getAllActivities, updateSingleActivity } from "../api";
import PaginationActivities from "./PaginationActivities";

const Activities = () => {
  let navigate = useNavigate();
  const [allActivities, setAllActivities] = useState([]);
  const token = localStorage.getItem("token");
  const [errorAddActivity, setErrorAddActivity] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(true);
  const [addNewActivity, setAddNewActivity] = useState(false);
  const [updateAnActivity, setUpdateAnActivity] = useState(false);
  const [successAddingActivity, setSucessAddingActivity] = useState(false);
  const [chosenActivityId, setChosenActivityId] = useState("");
  const [successUpdating, setSuccessUpdating] = useState(false);

  // User is currently on this page
  const [currentPageActivity, setCurrentPageActivity] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(30);

  const indexOfLastRecord = currentPageActivity * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = allActivities.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(allActivities.length / recordsPerPage);

  async function handleSucess(event) {
    event.preventDefault();
    setSucessAddingActivity(false);
  }
  async function handleSucessUpdate(event) {
    event.preventDefault();
    setSuccessUpdating(false);
  }
  async function handleError(event) {
    event.preventDefault();
    setErrorAddActivity(false);
  }

  async function handleAddAnActivity(event) {
    event.preventDefault();
    setShowAllActivities(false);
    setAddNewActivity(true);
  }

  async function handleUpdateAnActivity(event) {
    event.preventDefault();
    setShowAllActivities(false);
    setUpdateAnActivity(true);
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
    setErrorAddActivity(false);
    navigate("/activities");
    setShowAllActivities(true);
    setAddNewActivity(false);
    setSucessAddingActivity(true);
  }
  function onChangeHandler(e) {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setChosenActivityId(option);
  }
  async function handleSubmitUpdateAnActivity(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const description = event.target[1].value;
    const response = await updateSingleActivity(
      name,
      description,
      chosenActivityId,
      token
    );
    if (!response.error) {
      setSuccessUpdating(true);
    }
    event.target[0].value = "Choose Activity";
    event.target[1].value = "";
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
      <div className="d-flex" style={{ marginTop: "5rem", marginLeft: "2rem" }}>
        <h3 className="me-auto">Activities</h3>
        {token && (
          <div>
            <button
              className="btn btn-secondary dropdown-toggle btn-sm mb-3 me-5"
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
                  onClick={handleAddAnActivity}
                >
                  Create New Activity
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href=""
                  onClick={handleUpdateAnActivity}
                >
                  Update an Activity
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <PaginationActivities
        nPages={nPages}
        currentPageActivity={currentPageActivity}
        setCurrentPageActivity={setCurrentPageActivity}
      />
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
      {successUpdating && (
        <div
          className="alert alert-success text-center w-50 mx-auto"
          role="alert"
        >
          The description has been updated!
          <button
            type="button"
            className="btn-close ms-5"
            aria-label="Close"
            onClick={handleSucessUpdate}
          ></button>
        </div>
      )}
      {showAllActivities && (
        <div className="list-group">
          {currentRecords.map((activity, idx) => {
            return (
              <div key={idx}>
                <div
                  aria-current="true"
                  className="list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/activities/${activity.id}/${activity.name}`}
                      >
                        {activity.name}
                      </Link>
                    </h5>
                  </div>
                  <p className="mb-1">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <PaginationActivities
        nPages={nPages}
        currentPageActivity={currentPageActivity}
        setCurrentPageActivity={setCurrentPageActivity}
      />
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
      {updateAnActivity && (
        <form
          className="row g-3 justify-content-center"
          style={{ marginTop: "1rem" }}
          onSubmit={handleSubmitUpdateAnActivity}
        >
          <div className="col-auto">
            <select className="form-select" onChange={onChangeHandler}>
              <option defaultValue>Choose Activity</option>
              {allActivities.map((activity, idx) => {
                return (
                  <option key={idx} value={activity.name} id={activity.id}>
                    {activity.name}
                  </option>
                );
              })}
            </select>
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
              Update Activity
            </button>
          </div>
        </form>
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
