import React from "react"
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const { setToken } = props;
    async function handleSubmit (event){
        event.preventDefault()
   
        const username = event.target[0].value;
        const password = event.target[1].value;
        const {user , token} = await loginUser(username, password);
        if(!user){
          alert("User or password is incorrect")
          event.target[0].value = ""
          event.target[1].value = ""
        }
        if(user){
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        setToken(token)
        navigate("/");
      }
    }
    return (
      <> 
        <div>
        <section className="vh-100" style={{backgroundColor: "#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <form onSubmit={handleSubmit}>
        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="text" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typeEmailX-2">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typePasswordX-2">Password</label>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>


            <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}}
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>  
        </div>
        </form>
      </div>
    </div>
  </div>
</section></div>
</>
    )
}
export default Login