import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500">
            <div id="home">
                <div className="flex items-center justify-center flex-col-reverse gap-5 lg:gap-0 lg:flex-row text-center lg:text-start p-5">
                    <div className=" w-full lg:w-1/2 mt-12 ">
                        <h1 className="text-5xl font-bold mb-5 text-white">Hi, I Am Md Tazul Islam</h1>
                        <h3 className="text-2xl font-semibold mb-5 text-white">Junior Mern Stack Developer</h3>
                        <p className="mb-5 font-normal text-base text-white">🚀 Crafting MERN Marvels! Junior Developer adept at weaving data spells and frontend finesse with MongoDB, Express, React, and Node.js. 🌟 Firebase Authentication maestro adding a layer of security to the coding adventure. Join me as we innovate with HTML, CSS, JavaScript, and more! 🌈✨ #MERNExplorer 🔐</p>
                        <div className="flex items-center justify-center lg:justify-start gap-5">
                            <Link target="_blank" to="https://drive.google.com/uc?export=download&id=1TSMQgPQz1E_pQXfZffbCyR3TFxWDUra6" download className="btn btn-success">Resume</Link>
                            <button className="btn btn-success">Projects</button>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <img className="" src="https://i.ibb.co/9n5yCT8/profile-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;