import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;