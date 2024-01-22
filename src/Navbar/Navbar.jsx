import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { RiMenuFill } from "react-icons/ri";


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
            <li className="text-xl font-medium mr-2"><Link to="#contact" onClick={() => scrollToSection("contact")}>Contact</Link></li>
            <li className="text-xl font-medium mr-2"><Link to="/about" onClick={() => scrollToSection("about")}>About</Link></li>
        </>
    );
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RiMenuFill className="text-2xl text-white"></RiMenuFill>
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
                            <h1 className="text-xl font-bold  text-white " style={{ whiteSpace: "nowrap"}}>Md Tazul Islam</h1>
                       
                    </div>
                </div>
                <div className=" navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;