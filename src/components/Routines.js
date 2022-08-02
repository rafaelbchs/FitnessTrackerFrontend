import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPublicRoutines } from "../api";

const Routines = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    async function getData() {
      const data = await getPublicRoutines();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#68b555",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/fresh-snow.png")',
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "flex-start",
        flexGrow: "1",
        padding: "1.5rem",
        minHeight: "900px",
        minWidth: "1000px",
      }}
    >
      {data
        ? data.map((routine, idx) => {
            return (
              <div
                className="row"
                style={{
                  margin: "7rem auto auto 7rem",
                  flex: "1 0 2rem",
                  marginRight: "12px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.5rem",
                  minWidth: "800px",
                  minHeight: "250px",
                }}
                key={idx}
              >
                <div className="col-sm-6">
                  <div className="card">
                    <h5 className="card-header">
                      Made by {routine.creatorName}
                    </h5>
                    <div className="card-body">
                      <h5 className="card-title">{routine.name}</h5>
                      <p className="card-text">{routine.goal}</p>
                      <Link
                        to={`/routines/${routine.creatorName}/${routine.id}`}
                        state={{ activities: routine.activities }}
                        className="btn btn-primary"
                      >
                        Activities
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Routines;
