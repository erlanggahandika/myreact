import React from "react";
import '../css/App.css';
import '../css/Mobile.css';
import Images from '../ramen.jpg';


function Banner(){
    return(
        <div className="image-banner">
            <img src={Images} alt="" />
        </div>
    );
}

export default Banner;