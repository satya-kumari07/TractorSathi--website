export default function Navbar(){
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid mx-5">
            <a class="navbar-brand" href="/" style={{lineHeight:"0.8"}}>
                <div style={{textAlign:"center",fontSize:"2.5rem"}}>
                    <i class="fa-solid fa-tractor"></i><br></br>
                </div>
                <span style={{color:"white",fontWeight:"700"}}>TractorSaathi</span>
                </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="#">Home</a>
                <a class="nav-link" href="#">Login</a>
               
            </div>
        </div>
    </div>
</nav>
        </>
    )
}