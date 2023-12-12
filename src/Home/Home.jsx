
import Contact from "../Contact/Contact";
import EduExperience from "../Edu & Experience/EduExperience";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"
import NewsLetters from "../NewsLetters/NewsLetters";
import Projects from "../Projects/Projects";
import Tooling from "../Tooling/Tolling";
import Banner from "./Banner";
const Home = () => {
    return (
        <div className=" container mx-auto">
          <Navbar></Navbar>
           <Banner></Banner>
           <EduExperience></EduExperience>
           <Tooling></Tooling>
           <Projects></Projects>
           <Contact></Contact>
           <NewsLetters></NewsLetters>
           <Footer></Footer>         
        </div>
    );
};

export default Home;