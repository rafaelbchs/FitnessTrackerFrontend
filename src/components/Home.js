import React from "react";

const Home = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  return (
    <>
      {!token && (
        <>
          <header
            className="py-5"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=400)",
            }}
          >
            <div className="container px-5">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center my-5">
                    <h1 className="display-5 fw-bolder text-white mb-2">
                      Fitness Tracker App
                    </h1>
                    <p className="lead text-white mb-4">
                      Join today to get a kick-start on your journey to fitness!
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                      <a
                        className="btn btn-primary btn-lg px-4 me-sm-3"
                        href="/login"
                      >
                        Get Started
                      </a>
                      <a
                        className="btn btn-outline-light btn-lg px-4"
                        href="#features"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
              <div className="row gx-5">
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-grid-3x3-gap"></i>
                  </div>
                  <h2 className="h4 fw-bolder">Routines</h2>
                  <p>
                    Access the list of routines provided by the best athletes in
                    the world!
                  </p>
                  <a className="text-decoration-none" href="/routines">
                    Check routines
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-joystick"></i>
                  </div>
                  <h2 className="h4 fw-bolder">Activities</h2>
                  <p>
                    Browse the countless numbers of activities to include in
                    your routines!
                  </p>
                  <a className="text-decoration-none" href="/activities">
                    Check activities
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="col-lg-4">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-clipboard-check"></i>
                  </div>
                  <h2 className="h4 fw-bolder">Your Routines</h2>
                  <p>Keep track and make your own routines as you see fit!</p>
                  <a className="text-decoration-none" href="/register">
                    Join to access your routines
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 border-bottom">
            <div className="container px-5 my-5 px-5">
              <div className="text-center mb-5">
                <h2 className="fw-bolder">Athletes testimonials</h2>
                <p className="lead mb-0">Our athletes love using our app</p>
              </div>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                        </div>
                        <div className="ms-4">
                          <p className="mb-1">
                            Thank you for creating an amazing app that helps me
                            keeping track of my workouts!
                          </p>
                          <div className="small text-muted">
                            - Simu Kang, Korea
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body p-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                        </div>
                        <div className="ms-4">
                          <p className="mb-1">
                            This is app is great! I can't believe how my clients
                            have improved their physique and discipline thanks
                            to this app. HIGHLY RECOMMENDED!
                          </p>
                          <div className="small text-muted">
                            - Rafael, Venezuela
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {token && (
        <>
          <section className="vh-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 text-black d-flex align-items-center">
                  <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                    <h1>
                      Welcome to your Fitness Tracker,{" "}
                      {JSON.parse(user).username}
                    </h1>
                  </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                  <img
                    src="https://www.byrdie.com/thmb/K6Qtc1Cgo8yivdx6bas0_-kU0XU=/1005x1196/filters:fill(auto,1)/running-92039f7a6a8b40a9b5a25e75db10b5dd.jpg"
                    alt="Login image"
                    className="w-100 vh-100"
                    style={{ objectFit: "cover", objectPosition: "left" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
