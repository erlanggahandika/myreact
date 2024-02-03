import React from "react";
import '../css/App.css';
import '../css/Mobile.css';

function Search(){
    return(
        <section>
            <div className="search-bar">
                <div className="border-search">
                    <div className="row-search">
                        <div className="icon-search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="input-search">
                            <input type="text" placeholder="Search any ramen.."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Search;