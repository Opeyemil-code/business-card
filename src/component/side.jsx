import React from "react";
export default function SideContent(params) {
    return(
        <div className="flex flex-col space-y-4 mx-auto bg-black lg:w-1/2 mt- text-white w-80 ">
            <div className="mx-auto mt-6">
                <h1 className="text-2xl text-white font-bold font-poppins ml-12">About</h1>
                <p className="text-center w-5/6 mx-auto">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>

            <div className="mx-auto">
                <h1 className="text-2xl text-white font-bold font-poppins ml-12">Interest</h1>
                <p className="text-center w-5/6 mx-auto">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    )
}