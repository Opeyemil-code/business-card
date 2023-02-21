import React from "react";
import ReactDOM from 'react-dom/client'
import business from '../img/Rectangle 90.png'
export default function Img () {
    return(
        <div className="lg:w-1/2 mx-auto ">
            <img className="w-80 bg-cover mx-auto lg:w-full" src={business} alt="" />
        </div>
    )
}