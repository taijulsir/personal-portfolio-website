

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500" id="projects" className="mb-20 lg:max-w-6xl mx-auto overflow-hidden">
            <h1 className="text-center text-white text-5xl font-semibold mb-14">Projects</h1>
            <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 justify-items-center px-3 lg:mx-0  lg:px-0">
                {/* Project One */}
                <div className="card w-[350px]  lg:w-[450px] bg-[#2c1831] p-4  border rounded-lg shadow-2xl lg:hover:scale-105 transition-transform transform-gpu overflow-hidden">
                    <img src="https://i.ibb.co/RvmbM62/Screenshot-230.png" alt="Shoes" className="rounded-xl bg-transparent lg:w-[400px] h-[205px]  object-cover" />
                    <div className="mt-4 text-white">
                        <h1 className="mt-4 mb-2 text-xl">Luxury Real Estate</h1>
                        <div className="flex flex-row flex-wrap gap-2 ">
                            <p className="p-2 bg-[#381d3f] rounded ">React</p>
                            <p className="p-2 bg-[#381d3f] rounded ">tailwind</p>
                            <p className="p-2 bg-[#381d3f] rounded ">firebase</p>
                            <p className="p-2 bg-[#381d3f] rounded ">tanstack query</p>
                            <p className="p-2 bg-[#381d3f] rounded ">express</p>
                            <p className="p-2 bg-[#381d3f] rounded ">mongodb</p>
                            <p className="p-2 bg-[#381d3f] rounded ">Stripe</p>
                        </div>
                        <div className="flex justify-between mt-7"><div className="flex flex-row mt-2">
                            <a rel="noreferrer" target="_blank" href="https://real-estate-platform-auth.web.app/allProperties"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 mt-1 liveSite text-[#8EA7E9] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href="https://github.com/taijulsir/real-estate-project-client-side">
                                <div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 text-[#FF8DC7]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Client-repo</span></div></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href="https://github.com/taijulsir/real-estate-project-server-side"><div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 480 512" className="text-3xl text-[#57A773]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Server-repo</span></div></a></div>
                            <a className="AllProject_btnProject__Yab7U btn rounded-[3px] out border-accent-400 bg-accent-400 hover:text-black font-semibold" > Details</a>
                        </div>
                    </div>
                </div>
                {/* Project Two */}
                <div className="card w-[350px] lg:w-[450px] bg-[#2c1831] p-4  border rounded-lg shadow-2xl lg:hover:scale-105 transition-transform transform-gpu overflow-hidden">
                    <img src="https://i.ibb.co/zVrXKHd/Screenshot-231.png" alt="Shoes" className="rounded-xl bg-transparent  lg:w-[400px] h-[205px]  object-cover" />
                    <div className="mt-4 text-white">
                        <h1 className="mt-4 mb-2 text-xl">Food Sharing Community</h1>
                        <div className="flex flex-row flex-wrap gap-2 ">
                            <p className="p-2 bg-[#381d3f] rounded ">React</p>
                            <p className="p-2 bg-[#381d3f] rounded ">tailwind</p>
                            <p className="p-2 bg-[#381d3f] rounded ">firebase</p>
                            <p className="p-2 bg-[#381d3f] rounded ">express</p>
                            <p className="p-2 bg-[#381d3f] rounded ">mongodb</p>
                        </div>
                        <div className="flex justify-between mt-7"><div className="flex flex-row mt-2">
                            <a rel="noreferrer" target="_blank" href="https://food-donation-community.web.app/availableFoods"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 mt-1 liveSite text-[#8EA7E9] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href="https://github.com/taijulsir/food-sharing-community-client-side">
                                <div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 text-[#FF8DC7]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Client-repo</span></div></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href="https://github.com/taijulsir/food-sharing-community-server-side"><div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 480 512" className="text-3xl text-[#57A773]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Server-repo</span></div></a></div>
                            <a className="AllProject_btnProject__Yab7U btn rounded-[3px] out border-accent-400 bg-accent-400 hover:text-black font-semibold" > Details</a>
                        </div>
                    </div>
                </div>
                {/* Project Three */}
                <div className="card w-[350px] lg:w-[450px] bg-[#2c1831]  p-4  border rounded-lg shadow-2xl lg:hover:scale-105 transition-transform transform-gpu overflow-hidden">
                    <img src="https://i.ibb.co/yW6RGHX/brand-Cars.png" alt="Shoes" className="rounded-xl bg-transparent  lg:w-[400px] h-[205px]  object-cover" />
                    <div className="mt-4 text-white">
                        <h1 className="mt-4 mb-2 text-xl">Brand Cars Shop</h1>
                        <div className="flex flex-row flex-wrap gap-2 ">
                            <p className="p-2 bg-[#381d3f] rounded ">React</p>
                            <p className="p-2 bg-[#381d3f] rounded ">tailwind</p>
                            <p className="p-2 bg-[#381d3f] rounded ">firebase</p>
                            <p className="p-2 bg-[#381d3f] rounded ">express</p>
                            <p className="p-2 bg-[#381d3f] rounded ">mongodb</p>
                        </div>
                        <div className="flex justify-between mt-7"><div className="flex flex-row mt-2">
                            <a rel="noreferrer" target="_blank" href="https://brand-cars-assignment-auth.web.app/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 mt-1 liveSite text-[#8EA7E9] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href="https://github.com/taijulsir/brand-cars-project-client-side">
                                <div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 text-[#FF8DC7]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Client-repo</span></div></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href="https://github.com/taijulsir/brand-cars-project-server-side"><div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 480 512" className="text-3xl text-[#57A773]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Server-repo</span></div></a></div>
                            <a className="AllProject_btnProject__Yab7U btn rounded-[3px] out border-accent-400 bg-accent-400 hover:text-black font-semibold" > Details</a>
                        </div>
                    </div>
                </div>
                {/* Project Four */}
                <div className="card w-[350px] lg:w-[450px] bg-[#2c1831]  p-4  border rounded-lg shadow-2xl lg:hover:scale-105 transition-transform transform-gpu overflow-hidden">
                    <img src="https://i.ibb.co/qJSPLyK/wedding.png" alt="Shoes" className="rounded-xl bg-transparent  lg:w-[400px] h-[205px]  object-cover" />
                    <div className="mt-4 text-white">
                        <h1 className="mt-4 mb-2 text-xl">Botanica Wedding</h1>
                        <div className="flex flex-row flex-wrap gap-2 ">
                            <p className="p-2 bg-[#381d3f] rounded ">React</p>
                            <p className="p-2 bg-[#381d3f] rounded ">tailwind</p>
                            <p className="p-2 bg-[#381d3f] rounded ">firebase</p>
                            <p className="p-2 bg-[#381d3f] rounded ">Daisy Ui</p>
                            <p className="p-2 bg-[#381d3f] rounded ">Bootstrap</p>
                        </div>
                        <div className="flex justify-between mt-7"><div className="flex flex-row mt-2">
                            <a rel="noreferrer" target="_blank" href="https://event-management-auth-4edb1.web.app/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 mt-1 liveSite text-[#8EA7E9] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href="https://github.com/programming-hero-web-course-4/b8a9-event-management-taijulsir">
                                <div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-3xl mr-2 text-[#FF8DC7]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Client-repo</span></div></a>
                            <a rel="noreferrer" target="_blank" className="flex items-center" href=""><div className="group"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 480 512" className="text-3xl text-[#57A773]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg><span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">Server-repo</span></div></a></div>
                            <a className="AllProject_btnProject__Yab7U btn rounded-[3px] out border-accent-400 bg-accent-400 hover:text-black font-semibold" > Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;