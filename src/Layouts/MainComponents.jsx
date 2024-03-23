import { Outlet } from "react-router-dom";
import Blogs from "../assets/Pages/Blogs";
import Home from "../assets/Pages/Home";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer";

const MainComponents = () => {
    return (
        <div>
            <div className='h-16'>
                <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainComponents;