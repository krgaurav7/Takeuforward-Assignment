import Myimage from "../assets/MyImage.png";
import { RiShareForwardFill } from "react-icons/ri";

function Home(){


    return (
        <>
            <div className="bg-gray-950 text-white  w-screen min-h-screen "> 
            <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-30  w-full min-h-screen  bg-white/20 backdrop-blur-4xl">
                <div className=" w-full md:w-420px h-auto md:h-339px mb-6 md:mb-0">
                        <div className="flex items-center ">
                            <p className="bg-[oklch(28.6%_0.066_53.813)] p-1.5 border rounded-2xl text-center border-gray-600 w-204px h-31px hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"> 
                                Crafted by Top Engineers 
                            </p>
                        </div>
                        <div className="pt-6">
                            <h1 className="text-orange-500 font-semibold text-4xl">
                                ONE-STOP Platform!
                            </h1>
                            <p className="text-4xl">
                                All Your Prep in One Place One Plan. Zero Stress
                            </p>
                        </div>
                        <div className="pt-8 text-xl text-gray-500">
                            <p>
                                The most trusted platform for engineers to up-skill and crack tech interviews in the least time
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-10 pt-5 justify-center md:justify-start w-full md:w-310px h-auto">
                            <button class="bg-black text-gray-400 border border-gray rounded-xl py-2 px-6 transition h-19px hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]  hover:scale-105">
                                Explore Offering
                            </button>
                            <button class="bg-white/20 backdrop-blur-3xl text-gray border border-gray-400 rounded-xl py-2 px-6 transition w-65px h-19px hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]  hover:scale-105">
                                Buy Now
                            </button>
                        </div>
                </div>
                    <div className="border rounded-xl gap-3 border-b-neutral-600 mt-6 md:mt-0 ml-0 md:ml-2 bg-black w-full md:w-auto hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]  hover:scale-103 transition-all duration-500">
                        <div className="w-1116px h-410px p-2">
                            {/* image */}
                            <img src={Myimage} alt="My Image" className="w-full h-auto rounded-3xl" />
                            <div className="flex items-center">
                            <p className="p-3 ">TUF + Demo - One Stop Prep Platform!</p>
                            <button className=" bg-black text-white border border-white rounded-full w-6 h-6 flex justify-center items-center  hover:bg-gray-800 md:ml-50 ml-5">
                                <RiShareForwardFill className="w-5 h-5" />
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;
