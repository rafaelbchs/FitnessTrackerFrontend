import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPublicRoutines } from "../api";
import Pagination from "./Pagination";
import LoadingScreen from "./LoadingScreen";

const Routines = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(30);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    async function getData() {
      const data = await getPublicRoutines();
      setData(data);
    }
    getData();
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <>
    {loading === false ? 
    <div
      style={{
        backgroundColor: "#bdc0c7",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")',
        display: "flex",
        flexFlow: "row wrap",
        padding: "1.5rem",
        marginTop: "3rem",
      }}
    >

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentRecords
        ? currentRecords.map((routine, idx) => {
            return (
              <div
                className="row"
                style={{
                  padding: "0.5rem",
                  minWidth: "900px",
                  minHeight: "250px",
                  justifyContent: "center",
                }}
                key={idx}
              >
                <div className="col-sm-6">
                  <div className="card">
                    <h5 className="card-header">
                      Made by{" "}
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/routines/${routine.creatorName}`}
                      >
                        {routine.creatorName}
                      </Link>
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
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
          </div>
       : <LoadingScreen />
      }
</>
  );
};

export default Routines;
