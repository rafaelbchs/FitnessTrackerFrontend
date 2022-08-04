import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRoutinesByActivityId } from "../api";

const ActivitiesByName = () => {
  const [routinesByActivity, setRoutinesByActivity] = useState([]);
  const { activityName, activityId } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await getRoutinesByActivityId(activityId);
      setRoutinesByActivity(data);
    }
    getData();
  }, []);
  return (
    <>
      <h3 style={{ marginTop: "4rem", marginLeft: "2rem" }}>
        Routines that have the activity of {activityName}
      </h3>
      {routinesByActivity && (
        <div className="card">
          {routinesByActivity.map((routine, idx) => {
            return (
              <div key={idx}>
                <div className="card-header" >
                  <h5>{routine.name}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{routine.goal}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ActivitiesByName;
