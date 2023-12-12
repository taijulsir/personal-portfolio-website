
import Navbar from "../Navbar/Navbar"
import Tooling from "../Tooling/Tolling";
import Banner from "./Banner";
const Home = () => {
    return (
        <div className=" container mx-auto">
          <Navbar></Navbar>
           <Banner id="home"></Banner>
           <Tooling></Tooling>
        </div>
    );
};

export default Home;