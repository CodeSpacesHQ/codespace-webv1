import React from "react";

const Team = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "10rem" }}>
      <div className="text-center">
        <div className="d-flex flex-center mx-auto ct-text">
          <small className="text-primary">Our Team</small>
          <h1 className="text-dark text-center font-weight-bold display-5 w-50">
            The People Who Make It Happen!
          </h1>
        </div>
        <span className="text-center">
          Our team at code space is always working hard to give you the best
        </span>
      </div>

      <div className="owl-carousel owl-theme">
        <div className="col-md-8 mx-auto" style={{ marginTop: "5rem" }}>
          <div className="card bg-dark rounded-3">
            <div className="card-body">
              <div className="row">
                <div
                  className="col-lg-4 col-md-12 col-sm-12"
                  style={{ marginTop: "-3rem", flex: "1" }}
                >
                  <img
                    src={require("../../assets/img/precious.jpg")}
                    alt="Precious Kayili"
                    className="mt-lg-0 mb-4 img-responsive rounded-3 col-lg-0 col-md-12 shadow-lg"
                    style={{ objectFit: "cover" }}
                    width="250"
                    height="250"
                  />
                </div>
                <div className="col-lg-7 my-auto">
                  <h3 className="text-white fw-bold">
                    Precious Solomon Kayili
                  </h3>
                  <small className="fw-bold text-muted">
                    Full Stack Developer
                  </small>
                  <div className="social-links mt-4">
                    <a
                      href="/"
                      className="btn btn-primary btn-floating"
                      style={{ backgroundColor: "#0008ff" }}
                    >
                      <i className="fas fa-facebook-f"></i>
                    </a>

                    <a href="/" className="ms-3 btn btn-danger btn-floating">
                      <i className="fas fa-instagram"></i>
                    </a>

                    <a href="/" className="ms-3 btn btn-info btn-floating">
                      <i className="fas fa-linkedin"></i>
                    </a>

                    <a
                      href="/"
                      className="ms-3 btn btn-floating"
                      style={{ backgroundColor: "#333" }}
                    >
                      <i className="fas fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
