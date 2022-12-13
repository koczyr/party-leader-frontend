import "./App.css"
import React, { useState } from 'react'
import axios from 'axios'


export default function LeaderList(){
    const [leaders, setLeaders] =  useState([])

    const fetchLeaders = ()=>{
       axios.get(`http://localhost:3000/api/v1/leaders`)
      .then(response => {
        const leaders = response.data
        setLeaders(leaders)
      })      
     
    }

    return (
        <div>
          <h1>Leader List</h1>
          <p><button onClick={fetchLeaders}>Fetch leaders</button></p>
          <ul>
          {
            leaders
              .map(leader =>
                <li key={leader.id}>{leader.name}&nbsp;{leader.style}</li>
              )
          }
          </ul>
        </div>
    )
}
