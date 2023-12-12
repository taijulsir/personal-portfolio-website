import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Education = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500" className="max-w-5xl mx-auto mb-20 overflow-hidden">
            <div className="grid grid-cols-1  gap-5 md:px-14 px-2 lg:px-0">
              
                <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50  rounded py-6 px-2">
                    <h1 className="text-xl font-semibold text-white">Bachelor of Business Administration. (BBA)</h1>
                    <h3 className="text-base font-medium text-white">Department Of Accounting</h3>
                    <p className="text-base font-medium text-white">Passing Year : Running </p>
                    <p className="text-base font-medium text-white">Dhaka College Affiliated Dhaka University </p>
                    <p className="text-base font-medium text-white">Board: Dhaka University </p>
                </div>
                <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50  rounded py-6 px-2">
                    <h1 className="text-xl font-semibold text-white">Higher Secondary School Certificate (HSC)</h1>
                    <h3 className="text-base font-medium text-white">Business Studies</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2020 </p>
                    <p className="text-base font-medium text-white">Hazi Misir ALi Degree College</p>
                    <p className="text-base font-medium text-white">Board : Dhaka </p>
                </div>
                <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50  rounded py-6 px-2">
                    <h1 className="text-xl font-semibold text-white">Secondary School Certificate (SSC)</h1>
                    <h3 className="text-base font-medium text-white">Business Studies</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2018 </p>
                    <p className="text-base font-medium text-white">Pagla High School</p>
                    <p className="text-base font-medium text-white">Board : Dhaka </p>
                </div>
            </div>
        </div>
    );
};

export default Education;