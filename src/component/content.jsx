import React from "react";

export default function Content(){
    return(
        <section className="bg-black text-white flex flex-col lg:w-1/2 mx-auto lg:p-6 w-80">
            <div className="mx-auto">
                <h1 className="font-bold text-4xl font-poppins mt-5 lg:mt-0">Laura Smith</h1>
                <p className="text-yellow-500 text-xl font-bolder ml-3 font-poppins">Frontend developer</p>
                <p className="text-white text-sm ml-8 font-bold">laurasmith.website</p>
            </div>

            <div className="flex flex-row mx-auto space-x-4 mt-6">
                <a href="" className="border-2 px-8 bg-white text-black rounded-lg py-1 font-bold tracking-wide text-xl">
                    <h2>Email</h2>
                </a>
                <a href="" className="border-2 px-8 bg-blue-500 text-white rounded-lg py-1 font-bold tracking-wide text-xl">
                    <h2>LinkedIn</h2>
                </a>
            </div>
        </section>
    )
}