import React from "react"
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate();

    async function handleSubmit (event){
        event.preventDefault()
        const username = event.target[0].value;
        const password = event.target[1].value;
        const confirmPassword = event.target[2].value;
        if (password != confirmPassword) {
            return alert("Passwords do not match");
          }
        registerUser (username, password);
        navigate("/");
    }
    return (

<section className="text-center text-lg-start cascading-right" >

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
              <input type="text" id="form3Example42" className="form-control" />
              <label className="form-label" htmlFor="form3Example42">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form3Example4" className="form-control" />
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form3Example44" className="form-control" />
              <label className="form-label" htmlFor="form3Example44">Confirm Password</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
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
                <i class="fab fa-twitter"></i>
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
