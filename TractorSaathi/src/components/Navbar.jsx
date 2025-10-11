import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const[userEmail,setUserEmail]=useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const email = localStorage.getItem("email");
        const storedToken=localStorage.getItem("authToken");
        if(email){
            setUserEmail(email);
        }
        if(storedToken){
           setToken(storedToken)
        }
    },[]);

    const handleLogOut=()=>{
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        setToken(null);
        setUserEmail(null);
        navigate("/");
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid mx-5">
           <Link className="navbar-brand" to="/" style={{lineHeight:"0.8"}}>
                <div style={{textAlign:"center",fontSize:"2.5rem"}}>
                    <i className="fa-solid fa-tractor"></i><br></br>
                </div>
                <span style={{color:"white",fontWeight:"700"}}>TractorSaathi</span>
                </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup"  style={{display:"flex",justifyContent:"space-between"}}>
            <div className="navbar-nav" style={{marginLeft:"2rem",fontSize:"1.2rem"}}>
                <Link className="nav-link" to="#">Home</Link>
                 </div>
               <div style={{fontSize:"1.2rem",display:"flex",gap:"0.5rem"}}>
               
              {token ? (
              <>
                <span style={{ color: "white" }}>
                  <i className="fa-solid fa-circle-user"></i> {userEmail}
                </span>
                <button
                  onClick={handleLogOut}
                  className="btn btn-danger btn-sm"
                  style={{ fontWeight: "600" }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
                <Link className="nav-link text-white" to="/createUser">
                  SignUp
                </Link>
              </>
            )}
               </div>
           
        </div>
    </div>
</nav>
        </>
    )
}