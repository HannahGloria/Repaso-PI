import React from "react";

export default function Card({name, image, species}){
    return(
        <div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <img src = {image} alt="character"/>
            </div>
            <div>
                <h3>{species}</h3>
            </div>
            {/* <div>
                <h1>{origin}</h1>
            </div> */}
        </div>
    );
}