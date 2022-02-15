import React from "react";

const Advantages = () => {
  return (
    <div className="container-fluid bg-light p-5 h-100">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-uppercase">Achieve More</h6>
            <h2 className="text-dark fw-bold">
              Purpose of a convoy is to keep your team
            </h2>
          </div>

          <div className="col-lg-4 mt-sm-5 mt-md-0 col-md-6 ms-lg-4 ms-md-0">
            <div className="d-flex">
              <button className="btn btn-primary btn-lg btn-floating">
                <i className="fas fa-chart-area"></i>
              </button>
              <h4 className="my-auto ms-4 text-dark fw-bold">
                Built for impact
              </h4>
            </div>
            <p className="l-margin mt-1">
              We identify and nurture a truly diverse team of designers,
              developers and freelancers
            </p>
          </div>

          <div className="col-lg-4 mt-sm-3 mt-md-0 col-md-6 ms-lg-4 ms-md-0">
            <div className="d-flex">
              <button className="btn btn-danger btn-lg btn-floating">
                <i className="fas fa-sync"></i>
              </button>
              <h4 className="my-auto ms-4 text-dark fw-bold">
                In sync with you
              </h4>
            </div>
            <p className="l-margin mt-1">
              We work with the way you do by adapting to your workflows and
              rhythm we aim to blend in for a seamless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
