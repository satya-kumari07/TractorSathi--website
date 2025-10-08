import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid mx-5">
           <Link class="navbar-brand" to="/" style={{lineHeight:"0.8"}}>
                <div style={{textAlign:"center",fontSize:"2.5rem"}}>
                    <i class="fa-solid fa-tractor"></i><br></br>
                </div>
                <span style={{color:"white",fontWeight:"700"}}>TractorSaathi</span>
                </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
               <Link class="nav-link" to="#">Home</Link>
               <Link class="nav-link" to="#">Login</Link>
               
            </div>
        </div>
    </div>
</nav>
        </>
    )
}