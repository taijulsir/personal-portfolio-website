
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar"
import Projects from "../Projects/Projects";
import Tooling from "../Tooling/Tolling";
import Banner from "./Banner";
const Home = () => {
    return (
        <div className=" container mx-auto">
          <Navbar></Navbar>
           <Banner></Banner>
           <Tooling></Tooling>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;