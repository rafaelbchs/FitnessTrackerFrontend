import React, {useState} from "react"
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    let navigate = useNavigate();
    const [shortPasswordError, setShortPasswordError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [userError, setUserError] = useState(false)
    const { setToken } = props;
    async function handleSubmit (event){
        event.preventDefault()
        const username = event.target[0].value;
        const password = event.target[1].value;
        const confirmPassword = event.target[2].value;
        if (password != confirmPassword) {
            setPasswordError(true)
            return;
          }
        setPasswordError(false)
        const {user , token, error} = await registerUser (username, password);
        console.log(error)
        if (error){
          setShortPasswordError(true)
          return;
        }
        setShortPasswordError(false)
        if (!user){
          setUserError(true)
          return;
        }
        setUserError(false)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        setToken(token) 
        navigate("/");
    }
    return (

<section className="text-center text-lg-start cascading-right" style={{marginTop: "7rem"}}>

<div className="container py-4">
  <div className="row g-0 align-items-center">
    <div className="col-lg-6 mb-5 mb-lg-0">
      <div className="card cascading-right" style={{
          background: "hsla(0, 0%, 100%, 0.55)",
          backdropFilter: "blur(30px)"
          }}>
        <div className="card-body p-5 shadow-5 text-center">
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
            {
              userError ? <input type="text" id="firstinputid" className="form-control" style={{border: "1px solid #f9030f"}} autoComplete="off"/> :               <input autoComplete="off" type="text" id="firstinputid" className="form-control" />
            }
              <label className="form-label" htmlFor="firstinputid">Username</label>
              {
                userError &&  <p className="form-label" style={{color:"red", fontSize: ".8rem"}}>Username already exists</p>
              }
            </div>

            <div className="form-outline mb-4" >
            {
              passwordError ? <input autoComplete="off" type="password" id="secondinputid" className="form-control" style={{border: "1px solid #f9030f"}}/> : <input autoComplete="off" type="password" id="secondinputid" className="form-control" />
            }
              <label className="form-label" htmlFor="secondinputid">Password</label>
            </div>

            <div className="form-outline mb-4">
            
            {
              passwordError ? <input autoComplete="off" type="password" id="form3Example44" className="form-control" style={{border: "1px solid #f9030f"}}/> : <input  autoComplete="off" type="password" id="form3Example4" className="form-control" />
            }
            <label className="form-label" htmlFor="form3Example44">Confirm Password</label>
              {
                passwordError &&  <p className="form-label" style={{color:"red", fontSize: ".8rem"}}>Passwords do not Match</p>
              }
             {
                shortPasswordError &&  <p className="form-label" style={{color:"red", fontSize: ".8rem"}}>Password is less than 8 characters!</p>
              }
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input  autoComplete="off" className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign up
            </button>

            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="col-lg-6 mb-5 mb-lg-0">
      <img src="https://static.hudl.com/users/prod/1632979_07f9b8e0faba47d4b78e2956960ef6d5.jpg" className="w-100 rounded-4 shadow-4"
        alt="" />
    </div>
  </div>
</div>

</section>

    )
}
export default Register
