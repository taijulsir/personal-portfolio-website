import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar"
const Home = () => {
    return (
        <div>
          <Navbar id="home"></Navbar>
           <AboutMe id="about"></AboutMe> 
           <Contact id="contact"></Contact>
        </div>
    );
};

export default Home;