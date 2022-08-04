import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getPublicRoutinesByUserUn } from "../api";
const RoutinesByUser = () => {
    const [userRoutines, setUserRoutines] = useState([])
    const { creatorName } = useParams();
    useEffect(() => {
        async function getData() {
          const data = await getPublicRoutinesByUserUn(creatorName);
          setUserRoutines(data) 
        }
        getData();
      }, []);
  
    return (
        <>
        <h3 style={{marginTop: "5rem", marginLeft:"2rem"}}>Routines made by {creatorName}</h3>
        {
            userRoutines && (
                <div className="list-group">
          {userRoutines.map((routine, idx) => {
            return (
              <div key={idx}>
                <a
                  aria-current="true"
                  className="list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{routine.name}</h5>
                  </div>
                  <p className="mb-1">{routine.goal}</p>
                </a>
              </div>
            );
          })}
        </div>

            )
        }
        </>


    )

}
export default RoutinesByUser