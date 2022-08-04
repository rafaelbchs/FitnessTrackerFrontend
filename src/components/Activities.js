import React, { useState, useEffect } from "react";
import { getAllActivities } from "../api";


const Activities = () => {
    const [activities, setActivities] = useState([])
    const token = localStorage.getItem("token")
    async function handleClick(event){
        event.preventDefault()

    }
    useEffect(() => {
        async function getData() {
          const data = await getAllActivities();
          setActivities(data) 
          console.log(data)
        }
        getData();
      }, []);
  
    return (
        <><div className="d-flex" style={{ marginTop: "4rem", marginLeft: "2rem" }}>
        <h3 className="me-auto" >Activities</h3>
        {
            token && (
                <button type="button" className="btn btn-secondary btn-circle mb-3 me-5" onClick={handleClick}>
                    +</button>
            )
        }</div>
        <div className="list-group">
            {activities.map((activity, idx) => {
                return (
                    <div key={idx}>
                    <a aria-current="true" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className = "mb-1">{activity.name}</h5>
                    </div>
                        <p className="mb-1">{activity.description}</p>
                    </a>
                    </div>
                )
            })}
        
        
        
      </div></>
    )
}
export default Activities