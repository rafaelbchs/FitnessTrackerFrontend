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
    console.log(result);
  }      
}

export async function registerUser(username, password){
  fetch(`${BASE}users/register`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
    //get the token
  })
  .catch(console.error);
}