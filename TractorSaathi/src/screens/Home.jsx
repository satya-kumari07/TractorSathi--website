import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home(){
    return (
        <>
        <div><Navbar/></div>
        <div style={{position:"fixed",bottom:"0"}}><Footer/></div>
        </>
    )
}