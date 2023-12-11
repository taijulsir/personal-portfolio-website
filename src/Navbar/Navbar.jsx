import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";


const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        console.log(sectionElement)
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    const navlinks = (
        <>
            <li className="text-xl font-medium mr-2"><Link to="/" onClick={() => scrollToSection("home")}>Home</Link></li>
            <li className="text-xl font-medium mr-2"><Link to="#projects" onClick={() => scrollToSection("projects")}>Projects</Link></li>
            <li className="text-xl font-medium mr-2"><Link to="#service" onClick={() => scrollToSection("service")}>Service</Link></li>
            <li className="text-xl font-medium mr-2"><Link to="#blogs" onClick={() => scrollToSection("blogs")}>Blogs</Link></li>
            <li className="text-xl font-medium mr-2"><Link to="#contact" onClick={() => scrollToSection("contact")}>Contact</Link></li>
            <li className="text-xl font-medium mr-2"><Link to="#about" onClick={() => scrollToSection("about")}>About</Link></li>
        </>
    );
    return (
        <div>
            <div className="navbar fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="flex lg:gap-2 items-center">
                        <Player className="w-24"
                            autoplay
                            loop
                            src="https://lottie.host/aca6a867-d86b-46ef-936e-e10044aaddf5/qa95TzBDfE.json"
                        >
                        </Player>
                        <h1 className="text-xl font-bold w-64 text-white ">Md Tazul Islam</h1>
                    </div>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;