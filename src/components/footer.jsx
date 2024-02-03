import React from "react";
import '../css/Mobile.css';
import '../css/App.css';

function Footer(){
    return(
        <footer>
        <div class="bottom-nav">
            <div class="bottom-inner">
                <div class="bottom-main">
                    <div class="nav-items">
                        <div class="nav-item">
                            <i class="fa-solid fa-cart-shopping"></i>
                           
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-heart"></i>
                           
                        </div>
                    </div>
                    <div class="nav-item-main">
                        <div>
                            <i class='bx bx-grid-alt' ></i>
                        </div>
                    </div>
                    <div class="nav-itemss">
                        <div class="nav-item">
                            <i class="fa-solid fa-tag"></i>
                            
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-ellipsis"></i>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </footer>
    );
}

export default Footer;