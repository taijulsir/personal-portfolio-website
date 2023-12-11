
import Navbar from "../Navbar/Navbar"
import Banner from "./Banner";
const Home = () => {
    return (
        <div className=" container mx-auto">
          <Navbar></Navbar>
           <Banner id="home"></Banner>
        </div>
    );
};

export default Home;