export default function Footer() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          width: "100%",
          margin: 0,
          padding:0,
          position:"fixed",
          bottom:"0"
        }}
      >
        <footer
          style={{
            height:"5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid grey",
            padding: "10px 30px",
            backgroundColor: "grey",
            color: "white",
            margin: 0,
          }}
        >
          <div className="d-flex align-items-center">
            <a href="/" className="text-decoration-none text-white">
              TractorSaathi
            </a>
            <span
              className="mb-0 ms-3"
              style={{ fontSize: "14px", color: "lightgray" }}
            >
              © 2025 Company, Inc
            </span>
          </div>

          <div>
            <a className="text-white me-3 mx-3" href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a className="text-white me-3" href="#" aria-label="Instagram">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a className="text-white" href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
