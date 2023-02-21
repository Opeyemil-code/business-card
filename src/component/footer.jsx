import React from "react";
import facebook from '../img/Facebook Icon.png';
import twitter from '../img/Twitter Icon.png';
import instagram from '../img/Instagram Icon.png';
import github from '../img/GitHub Icon.png'

export default function Footer(){
    return(
    <footer className="flex mx-auto flex-row bg-black lg:w-1/2  mx-auto pb-6 w-80">
            <div className="flex flex-row mx-auto space-x-12 mt-12 bg-black ">
                <a href="http://">
                <img className='' src={facebook} alt="" />
                </a>
                <a href="http://">
                <img className="" src={twitter} alt="" />
                </a>
                <a href="http://">
                <img className="" src={instagram} alt="" />
                </a>
                <a href="http://">
                <img className="" src={github} alt="" />
                </a>
            </div>
        </footer>
    )
}

