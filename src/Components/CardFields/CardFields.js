import React from "react";
import '../CardFields/CardsFields.css'

export default function CardFields({image={},showName,genres=[],rating}){
    return(
        <div id="cardContent">
            <img src={image!=null?image.medium:image} alt={showName} id="cardImg"/>
            <p id="cardShow">Show Name : {showName}</p>
            <span id="cardGenres">Genres: {genres.map((e,i)=>(
                <span key={i}>{(genres.length-1)===i?`${e}`: `${e}, `} </span>
            ))}</span>
            <div id="cardRating">Rating of Show: {rating.average!=null?rating.average:"Not Known"}</div>
        </div>
    )
}