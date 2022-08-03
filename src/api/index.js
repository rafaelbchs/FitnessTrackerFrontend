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