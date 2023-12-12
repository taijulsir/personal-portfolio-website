import Education from "../Education/Education";
import Experience from "../Experience/Experience";


const EduExperience = () => {
    return (
        <div className=" max-w-6xl mx-auto">
            <h1 className="text-center text-white font-bold text-5xl mb-10">Education & Experience</h1>
            <div className="flex lg:flex-row flex-col justify-between gap-6">
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