import React, { useState } from "react";
import '../BookTicketForm/TicketForm.css'

export default function TicketForms({movie,genres,id,notShowForm}){

    const [fullName,setFullName] = useState("")
    const [showDate,setShowDate] = useState("")
    const [showTime,setShowTime] = useState("")
    const [seats,setSeats] = useState(0)


    const handleSubmit = (e)=>{
        if (seats === 0 || fullName === "" || showDate === "" || showTime === "") {
             e.preventDefault()
             alert("Please Enter all Field")
        }
        else{
            //This will store in user name, seats and movie name in localStorage.
            localStorage.setItem("name",fullName)
            localStorage.setItem("seats",seats)
            localStorage.setItem("date",showDate)
            localStorage.setItem(`movie${id}`,movie)
            alert(`Congratulation ${localStorage.getItem("name")} your Tickets of "${localStorage.getItem(`movie${id}`)}" Show are Booked for ${localStorage.getItem("date")}`)
        }

    }
    //if the particular movie is booked already then it will show alert popup if not then form section will shown.
    return(
        <form style={{width:"21rem", height:"21rem", textAlign:"left", marginLeft: "15px"}} onSubmit={handleSubmit}>
            <div id="movieDetails">
                Movie : {movie} <br/>
                Genres : {genres.map((e,i)=>(
                <span key={i}>{(genres.length-1)===i?`${e}`: `${e}, `} </span>))}
            </div>
            <br/>

            <label htmlFor="fullName">Full Name : </label>
            <input id="fullName" placeholder="Full Name" type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
            <br/><br/>
            <label htmlFor="Seats">Seats : </label>
            <select id="Seats" defaultValue={seats} onChange={(e)=>setSeats(Number(e.target.value))}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br/><br/>
            <label htmlFor="Date">Date : </label>
            <input id="Date" type="date" onChange={(e)=>setShowDate(e.target.value)}/>
            <br/><br/>
            <label htmlFor="Time">Time : </label>
            <input id="Time" type="time" onChange={(e)=>setShowTime(e.target.value)}/>
            <br/><br/>
            <button type="submit" id="ticketSumbitBtn" disabled={localStorage.getItem(`movie${id}`)!==movie?false: true}>Submit</button>
        </form>
    )
}