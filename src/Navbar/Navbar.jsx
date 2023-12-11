import { Link } from "react-router-dom";



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
            <li className="text-xl font-medium mr-2"><Link to="#about" onClick={() => scrollToSection("about")}>About</Link></li>
            <li className="text-xl font-medium mr-2"><Link to="#contact" onClick={() => scrollToSection("contact")}>Contact</Link></li>
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className=" navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;