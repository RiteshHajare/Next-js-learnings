import { useRouter } from 'next/router';
import React, { useState } from 'react' 


function event({eventList}) {
    const router = useRouter();
    const [events, setEvents] = useState(eventList)

    async function fetchSportsEvents(){
    const response = await fetch('http://localhost:4000/events?category=sports ')
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports",undefined,{shallow:true})
    }
  return ( 
    <div>
    <button onClick={fetchSportsEvents}>Sports Events</button>
        <h1>List of Events</h1>
        {events.map(event=>{
            return(
                <div key={event.id}>
                    <h2>
                        {event.id} {event.date} | {event.category}

                    </h2>
                    <p>{event.description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default event

export async function getServerSideProps(context){
    console.log(context.query.category);
    const category = context.query.category;
    const queryStr = category?"category=sports":""
    const response = await fetch(`http://localhost:4000/events?${queryStr}`)
    const data = await response.json();
    
    return{
        props:{
            eventList:data
        }
    }
}