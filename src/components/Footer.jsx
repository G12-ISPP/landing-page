import React from "react";
// Icons
import {
    RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-primary-200 p-5">
            <div className='className="grid xl:max-w-[1200px] l:max-w-[800px] md:max-w-[600px] mx-[2vh] md:mx-auto flex flex-col md:flex-row gap-4 border-b items-center justify-center border-gray-500 pb-8'>
                {/* Logo */}
                <div className="w-1/6 flex items-center justify-center h-full ml-[2vh]">
                    <img src="logo.png"className="max-h-full max-w-full object-cover"/>
                </div>
                {/* Social media */}
            </div>
            <div className="mt-10 md:mt-20">
                <p className="text-gray-300 text-center">
                    © ISPP 2024 - All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
