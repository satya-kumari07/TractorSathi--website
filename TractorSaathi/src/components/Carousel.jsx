import React from "react";
import tractor1 from "../assets/tractor1.jpg";
import tractor3 from "../assets/tractor3.jpg";
import tractor4 from "../assets/tractor4.jpg";


export default function Carousel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      style={{ width: "100%" ,marginBottom:"2rem"}}
    >
      <div className="carousel-inner">
        {/* 🔍 Search bar centered */}
        <div className="carousel-caption" style={{zIndex:"10",display:"flex",justifyContent:"center"}}>
          <div style={{width:"20rem"}}>
            <input
              type="search"
              className="form-control"
              placeholder="Search tractor parts here"
              aria-label="Search"
            />
          </div>
         
          <div style={{position:"relative",left:-40,bottom:-10,zIndex:"30",color:"grey"}}>
             <i
              className="fa-solid fa-magnifying-glass position-absolute"></i>
          </div>
        </div>

        {/* 🖼️ Carousel Images */}
        <div className="carousel-item active">
          <img
            src={tractor3}
            className="d-block w-100"
            alt="Tractor 3"
            style={{
              height: "25rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={tractor1}
            className="d-block w-100"
            alt="Tractor 1"
            style={{
              height: "25rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={tractor4}
            className="d-block w-100"
            alt="Tractor 4"
            style={{
              height: "25rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      {/* 🔘 Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
