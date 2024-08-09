import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://api.guccn8.com/banners/photo_2024-03-20_20-13-37.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide Label</h5>
            <p>First slide description goes here.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://api.guccn8.com/banners/photo_2024-03-20_20-13-35.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide Label</h5>
            <p>Second slide description goes here.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://api.guccn8.com/banners/%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE.png"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide Label</h5>
            <p>Third slide description goes here.</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
