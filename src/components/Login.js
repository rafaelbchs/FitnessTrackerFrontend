import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const { setToken } = props;

  async function handleError(event) {
    event.preventDefault();
    setLoginError(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;
    const { user, token } = await loginUser(username, password);
    if (!user) {
      setLoginError(true);
      event.target[0].value = "";
      event.target[1].value = "";
      return;
    }
    setLoginError(false);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    setToken(token);
    navigate("/");
  }
  return (
    <>
      <div>
        <section className="vh-100" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/56e487181d07c0743d227289/1591040022438-CASYOB4UBLGYQC5RTN08/Canva+-+Fitness%2C+home+workout+and+weight+training+concept.+Man+starting+to+exercise+with+dumbbell.+Water+or+protein+shake+bottle..jpg?format=2500w')" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              {loginError && (
            <div
              className="alert alert-danger text-center w-75 mx-auto"
              role="alert"
            >
              Username or password does not match!
              <button
                type="button"
                className="btn-close ms-5"
                aria-label="Close"
                onClick={handleError}
              ></button>
            </div>
          )}
                <form onSubmit={handleSubmit}>
                  <div
                    className="card shadow-2-strong"
                    style={{ borderRadius: "1rem" }}
                  >
                    <div className="card-body p-5 text-center">
                      <h3 className="mb-5">Sign in</h3>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="typeEmailX-2"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeEmailX-2">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="current-password"
                          className="form-control form-control-lg"
                          autoComplete="off"
                        />
                        <label className="form-label" htmlFor="current-password">
                          Password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-start mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          {" "}
                          Remember password{" "}
                        </label>
                      </div>

                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
