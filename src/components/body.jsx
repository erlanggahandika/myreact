import React from "react";
import '../css/App.css';
import '../css/Mobile.css';

function Body(){
    return (
        <section>
            <div className="body-container">
                <h4 className="nick-pengguna">Hello , Teressa!</h4>
                <h2 className="descript">Make your own food,</h2>
                <h2 className="descript-n">stay at <span className="descript-color">home</span></h2>
            </div>
        </section>
    );
}

export default Body;