import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home(){
    return (
        <div style={{height:"90rem"}}>
        <div><Navbar/></div>

        <div>
            <Carousel/>
        </div>

        <div style={{display:"flex",justifyContent:"center",gap:"1rem"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        <div ><Footer/></div>
        </div>
    )
}