import { Parallax } from "react-parallax";
import img from "../../public/banner.jpg";


const NewsLetters = () => {
    return (
        <div>
            <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="news"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-80 bg-[#231427]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-white text-center text-2xl md:text-4xl mb-5">SUBSCRIBE MY NEWSLETTER</h1>
                        <fieldset className="form-control w-[400px] md:w-[500px] mx-auto">
                            <div className="relative ">
                                <input type="text" placeholder="Enter Your Email Here" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-accent text-black absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
};

export default NewsLetters;