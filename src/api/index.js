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