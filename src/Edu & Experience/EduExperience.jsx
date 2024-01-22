import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const EduExperience = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500" className=" max-w-6xl mx-auto overflow-hidden">
            <h1 className="text-center text-white font-bold text-5xl mb-10">Education & Experience</h1>
            <div className="flex lg:flex-row flex-col justify-between gap-6 lg:px-0 px-3">
                <div>
                    <Education></Education>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="steps steps-vertical h-[600px]">
                        <li className="step"></li>
                        <li className="step"></li>
                        <li className="step"></li>                       
                    </ul>
                </div>
                <div>
                    <Experience></Experience>
                </div>

            </div>
        </div>
    );
};

export default EduExperience;