import tractor3 from "../assets/tractor3.jpg";
import tractor1 from "../assets/tractor1.jpg";
import tractor4 from "../assets/tractor4.jpg";

export default function Carousel(){
    return(
        <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{width:"100%"}}>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={tractor3} className="d-block w-100" alt="..." style={{height:"25rem",objectFit:"cover",objectPosition:"center"}}/>
            </div>
            <div className="carousel-item">
                <img src={tractor1} className="d-block w-100" alt="..."style={{height:"25rem",objectFit:"cover",objectPosition:"center"}}/>
            </div>
            <div className="carousel-item">
                <img src={tractor4} className="d-block w-100" alt="..." style={{height:"25rem",objectFit:"cover",objectPosition:"center"}}/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </>
    )
}