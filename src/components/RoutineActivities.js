import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const RoutineActivities = () => {
  const location = useLocation();
  const { activities } = location.state;
  return (
    <>
      <h3 style={{ marginTop: "4rem", marginLeft: "2rem" }}>Activities</h3>
      <div className="card">
        {activities.map((activity, idx) => {
          return (
            <>
              <div className="card-header" key={idx}>
                Name: <Link to={`/activities/${activity.id}/${activity.name}`}>{activity.name}</Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">Duration: {activity.duration}</h5>
                <h5 className="card-title">Count: {activity.count}</h5>
                <p className="card-text">Description: {activity.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RoutineActivities;
