import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const Experience = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500" className=' overflow-hidden'>
            <div className="max-w-5xl mx-auto mb-20">
                <div className="grid grid-cols-1  gap-5 md:px-14 px-2 lg:px-0">

                    <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50  rounded py-5 px-2">
                        <h1 className="text-xl font-semibold text-white">React.js Project Developer</h1>
                        <h3 className="text-base font-medium text-white flex items-center mt-2"> <IoMdArrowDropright></IoMdArrowDropright>Dynamic UI Creation:</h3>
                        <p className=" font-medium text-white text-sm">Crafted captivating user interfaces & web interaction.</p>
                        <h3 className="text-base font-medium text-white flex items-center mt-2"><IoMdArrowDropright></IoMdArrowDropright> Tailwind CSS Mastery: </h3>
                        <p className="text-sm font-medium text-white">Leveraged Tailwind CSS for refined, modernized web aesthetics.</p>

                    </div>
                    <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50  rounded py-5 px-2">
                        <h1 className="text-xl font-semibold text-white">Database Integration With MongoDB</h1>
                        <h3 className="text-base font-medium text-white flex items-center mt-2">  <IoMdArrowDropright></IoMdArrowDropright> Efficient Data Storage:</h3>
                        <p className="text-sm font-medium text-white">Utilized MongoDB for efficient, scalable data storage..</p>
                        <h3 className="text-base font-medium text-white flex items-center mt-2"><IoMdArrowDropright></IoMdArrowDropright> Enhanced Backend Functionality: </h3>
                        <p className="text-sm font-medium text-white">Integrated MongoDB, optimized backend for performance.</p>
                    </div>
                    <div className="border-2 border-blue-400   rounded py-5 px-2">
                        <h1 className="text-xl font-semibold text-white">Version Control Skills</h1>
                        <h3 className="text-base font-medium text-white flex items-center mt-2"> <IoMdArrowDropright></IoMdArrowDropright>Git Proficiency:</h3>
                        <p className="text-sm font-medium text-white">
                            Expert in Git for collaborative development..</p>
                        <h3 className="text-base font-medium text-white flex items-center mt-2"><IoMdArrowDropright></IoMdArrowDropright> Repository Management:</h3>
                        <p className="text-sm font-medium text-white">Managed version-controlled repositories for code integrity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;