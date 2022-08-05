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
            <div key={idx}>
              <div className="card-header">
                <b>
                  <Link
                    style={{ textDecoration: "none", letterSpacing: "1px" }}
                    to={`/activities/${activity.id}/${activity.name}`}
                  >
                    {activity.name}
                  </Link>
                </b>
              </div>
              <div className="card-body">
                <p className="card-title">{activity.duration} seconds</p>
                <p className="card-title">{activity.count} reps</p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RoutineActivities;
