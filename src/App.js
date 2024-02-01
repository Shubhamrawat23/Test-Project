import './App.css';
import useDataHook from './CustomHook/useDataHook';
import CardFields from './Components/CardFields/CardFields';
import Summary from './Components/Summary/Summary';
import TicketForms from './Components/BookTicketForm/TicketForm';
import { useRef, useState } from 'react';

function App() {
  const [summaryData,setSummaryData] = useState([])
  const [showPopUp,setShowPopUp] = useState(false)
  const [showTicketForm,setShowTicketForm] = useState(false)

  const apiData = useDataHook();
  const formRefer = useRef();

  const handleClick = (value) => {
    setSummaryData([value])
    setShowPopUp(!showPopUp)
  }

  const handleScroll = (event)=>{
    window.scrollTo({top: event, behavior:"smooth"})
  }

  const handleForm = () => {
    setShowTicketForm(!showTicketForm)
  }

  return (
    <div className="App" style={{height:`${showPopUp===true?"165vh":"auto"}`}}>
      <h1 id='heading'>Welocome To Test Project</h1>

      {/* Its a Card Section where all short Details seen of the movies*/}
      <section id='cardSec' style={{display:`${showPopUp===true?"none":"flex"}`, flexWrap:"wrap", alignItems:"center", justifyContent:"center", padding: "40px", filter:`${showPopUp===true?"blur(5px)":"none"}`}}>
        {apiData.map((value) => (
          <div key={value.show.id} id='mainBodyOfCard'>
            <CardFields image={value.show.image} showName={value.show.name} genres={value.show.genres} rating={value.show.rating} />
            <button id="readMore" onClick={()=>handleClick(value)}>Read More...</button>
          </div>
        ))}
      </section>

      {/*This section is summary part where specific movie details shown when we click read more*/}
      <div id='summaryCard' style={{filter:`${showTicketForm===true?"blur(15px)":"none"}`, pointerEvents:`${showTicketForm===true?"none":"auto"}`}}>
        {showPopUp && summaryData.map((value) => (
          <div key={value.show.id}>
            <button onClick={handleClick} id='summaryClose'>Close</button>
            <Summary image={value.show.image} showName={value.show.name} genres={value.show.genres} rating={value.show.rating} summary={value.show.summary} />
            <button 
            onClick={()=>{handleForm() 
            handleScroll(formRefer)}} id='ticketBtn'>Book Tickets</button>
          </div>
        ))}
      </div>

      {/*This is ticket form when book tickets button click then it will show */}
      {showTicketForm && summaryData.map((values)=>(
        <div key={values.show.id} id='ticketForm' ref={formRefer}>
          <button id="crossBtn" onClick={handleForm}>X</button>
          <TicketForms movie={values.show.name} genres={values.show.genres} id={values.show.id}/>
        </div>
      ))}

    </div>
  );
}

export default App;
