import React from "react";
import ReactDOM from 'react-dom/client'
import business from '../img/Rectangle 90.png'
export default function Img () {
    return(
        <div className="lg:w-1/2 mx-auto w-96">
            <img className="w-full bg-cover mx-auto" src={business} alt="" />
        </div>
    )
}