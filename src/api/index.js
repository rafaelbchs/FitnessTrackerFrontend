import axios from "axios";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api/"

export async function loginUser(username, password) {

  try {
    const response = await fetch(`${BASE}users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })})
      const result = response.json()
      return result
  } catch (error) {
    console.error(error);
  }      
}

export async function registerUser(username, password){
  try {
    const response = await fetch(`${BASE}users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })})
      const result = response.json()

        return result
      
  } catch (error) {
    console.error(error)
  }

}

export async function getPublicRoutines(){
  try {
    const response = await fetch(`${BASE}routines`, {
      headers: {
        'Content-Type': 'application/json'
      }})
      const result = response.json()
      return result
  } catch (error) {
    console.error(error)
  }
}

export async function createRoutine(name, goal, isPublic, token){
  try {
    const response = await fetch(`${BASE}routines`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic
      })
    })
    const result = response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export async function getPublicRoutinesByUser(username, token){
  try {
    const response = await fetch(`${BASE}users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }})
      const result = response.json()
      return result
  } catch (error) {
    console.error(error)
  }
}

export async function getAllActivities(){
  try {
    const response = await fetch(`${BASE}activities`, {
      headers: {
        'Content-Type': 'application/json'
      }})
      const result = response.json()
      return result
  } catch (error) {
    console.error(error)
  }
}

export async function addActivityToRoutine(activityId, count, duration, routineId){
  try {
    const response = await fetch(`${BASE}routines/${routineId}/activities`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration
      })
    })
    const result = response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export async function updateSingleRoutine(name, goal, routineId, token){
  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({
    name: name,
    goal: goal
  })
})
  const result = response.json()
  return result
  } catch (error) {
    console.error(error)
  }
}

export async function updateSingleRoutineActivity(count, duration, routineActivityId, token){
  try {
    const response = await fetch(`${BASE}routine_activities/${routineActivityId}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({
    count: count,
    duration: duration
  })
})
  const result = response.json()
  return result
  } catch (error) {
    console.error(error)
  }
}

export async function deleteRoutineActivity(routineActivityId, token){
  try {
    const response = await fetch(`${BASE}routine_activities/${routineActivityId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
  const result = response.json()
  return result
  } catch (error) {
    console.error(error)
  }
}

export async function submitDeleteRoutine(routineId, token){
  try {
    const response = await fetch(`${BASE}routines/${routineId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
  const result = response.json()
  return result
  } catch (error) {
    console.error(error)
  }
}

export async function createActivity(name, description, token){
  try {
    const response = await fetch(`${BASE}activities`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    const result = response.json()
    return result
  } catch (error) {
    console.error(error)
    
  }
}
export async function getPublicRoutinesByUserUn(username){
  try {
    const response = await fetch(`${BASE}users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json'
      }})
      const result = response.json()
      return result
  } catch (error) {
    console.error(error)
  }
}

export async function getRoutinesByActivityId(activityId){
  try {
    const response = await fetch(`${BASE}activities/${activityId}/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export async function updateSingleActivity(name, description, activityId, token){
 try {
    const response = await fetch(`${BASE}activities/${activityId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    const result = response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}