import React from "react";
import '../css/App.css';
import '../css/Mobile.css';

function Sticky(){
    return(
        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
            
        })
    );
}

export default Sticky;