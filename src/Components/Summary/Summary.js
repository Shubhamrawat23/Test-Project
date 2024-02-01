import React from "react";
import '../Summary/Summary.css'

export default function Summary({image={}, showName, genres=[], rating, summary}){
    return (
        <div>
            <img src={image!=null?image.original:image} alt={showName} id="summaryImg"/>
            <h1>Name: {showName}</h1>
            <h2>Genres : {genres.map((e,i)=>(
                <span key={i}>{(genres.length-1)===i?`${e}`: `${e}, `}</span>
            ))}</h2>
            <h2>Rating of Show: {rating.average!=null?rating.average:"Not Known"}</h2>
            <div style={{padding:"5px"}} dangerouslySetInnerHTML={{__html: summary}}></div>
        </div>
    )
}