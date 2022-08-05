import React from "react"

const Home = () => {
    return(<>
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">Best Fitness Tracker App in NA</h1>
                            <p className="lead text-white-50 mb-4">Join today to get a kick-start on your journey to fitness!</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
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
                    <div className = "feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-grid-3x3-gap"></i></div>
                    <h2 className="h4 fw-bolder">Routines</h2>
                    <p>Access the list of routines provided by the best athletes in the world!</p>
                    <a className="text-decoration-none" href="#!">
                        Call to action
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-joystick"></i></div>
                    <h2 className="h4 fw-bolder">Activities</h2>
                    <p>Browse the countless numbers of activities to include in your routines!</p>
                    <a className="text-decoration-none" href="#!">
                        Call to action
                        <i className="bi bi-arrow-right"></i>
                    </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-clipboard-check"></i></div>
                        <h2 className="h4 fw-bolder">Your Routines</h2>
                        <p>Keep track and make your own routines as you see fit!</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section></>
    )
}

export default Home