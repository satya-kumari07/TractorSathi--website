import tractor3 from "../assets/tractor3.jpg";
import tractor1 from "../assets/tractor1.jpg";
import tractor4 from "../assets/tractor4.jpg";

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ width: "100%" }}>
      <div className="carousel-inner" style={{ height: "25rem", position: "relative" }}>

        {/* Search bar centered with icon inside input */}
        <div
          className="carousel-caption"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 140,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
        >
          <div className="position-relative" style={{ maxWidth: "20rem", width: "100%" }}>
            <input
              type="search"
              className="form-control ps-5"
              placeholder="Search"
              aria-label="Search"
            />
            <i
              className="fa-solid fa-magnifying-glass position-absolute"
              style={{ left: "10px", top: "50%", transform: "translateY(-50%)", color: "gray" }}
            ></i>
          </div>
        </div>

        {/* Carousel images */}
        <div className="carousel-item active">
          <img
            src={tractor3}
            className="d-block w-100"
            alt="Tractor 3"
            style={{ height: "25rem", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={tractor1}
            className="d-block w-100"
            alt="Tractor 1"
            style={{ height: "25rem", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={tractor4}
            className="d-block w-100"
            alt="Tractor 4"
            style={{ height: "25rem", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Carousel controls */}
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
