import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });

    const res = await response.json();
    console.log(res);

    if (!res.success) {
      alert("Enter valid credentials");
    }

    if(res.success){
        navigate("/");
    }
  };

  const change = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(214, 238, 214)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "40%",
          alignSelf: "center",
          padding: "2rem",
          backgroundColor: "grey",
          borderRadius: "25px",
          fontSize: "1.1rem",
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={credentials.name}
            onChange={change}
          />
        </div>

        <br />

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={change}
          />
          <small
            style={{ fontSize: "1rem" }}
            id="emailHelp"
            className="form-text text-muted"
          >
            We'll never share your email with anyone else.
          </small>
        </div>

        <br />

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={change}
          />
        </div>

        <br />

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter location"
            name="location"
            value={credentials.location}
            onChange={change}
          />
        </div>

        <br />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/login" style={{ color: "white", fontSize: "1.2rem" }}>
            Already have an account?
          </Link>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
