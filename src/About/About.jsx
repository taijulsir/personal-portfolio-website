
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500" className="min-h-screen lg:w-2/3 mx-auto pt-24 text-center lg:text-start px-2 overflow-hidden ">
            <h1 className="text-white text-5xl font-bold mb-2">Hello, I'm <span className="text-pink-800">Md Tazul Islam</span></h1>
            <h2 className="text-white text-2xl font-semibold">A Junior MERN-Stack-Developer</h2>
            <p className="text-white mt-4 text-lg md:mx-0 font-primary">with a passion for creating immersive and dynamic web applications. My journey in web development began as a detail-oriented Front-End Developer, driven by a curiosity to craft visually appealing and user-friendly websites. Building upon a strong foundation in JavaScript, React.js, and Next.js, I've now expanded my skill set to include the full MERN (MongoDB, Express.js, React.js, Node.js) stack.

                Throughout my career, I've honed my skills in UI/UX design, ensuring that every project not only meets but exceeds user expectations. From e-commerce platforms to dynamic web applications, I've successfully translated complex concepts into elegant, functional designs. Proficient in modern frameworks such as React and Vue.js, I constantly push the boundaries to create seamless, interactive user experiences.

                Collaboration is at the core of my work ethic, thriving in team environments where creativity and problem-solving converge. Effective communication is key to successful projects, and I'm always eager to share my insights while learning from others in the process.

                As a continuous learner, I am committed to staying at the forefront of the ever-evolving landscape of web development. Whether experimenting with emerging technologies or refining my design sensibilities, I bring a fresh perspective and creative solutions to the table.

                Beyond my technical skills, I bring a strong commitment to deadlines, attention to detail, and a passion for delivering high-quality work. I look forward to contributing my expertise to MERN stack projects, exceeding client expectations and bringing innovative solutions to the forefront.</p>
            <div className="flex justify-center gap-4 mt-6 lg:justify-start">
                <a to="/" id="projects" className="text-lg text-white rounded border-accent-400 btn btn-outline hover:bg-pink-800 hover:text-white hover:transition-all hover:duration-1000 " href="/#projects">Project</a>
                <a rel="noreferrer" target="_blank" className="text-lg text-white rounded btn bg-pink-800 hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white" href="https://drive.google.com/uc?export=download&id=1TSMQgPQz1E_pQXfZffbCyR3TFxWDUra6" download>Resume</a>
            </div>
            <div className="mt-5">
                <Link to='/'><button className="text-lg text-white border-none rounded btn bg-pink-800 hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white">Move Home</button></Link>
            </div>
        </div>
    );
};

export default About;