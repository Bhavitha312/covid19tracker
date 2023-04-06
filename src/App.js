import React, { useState, useEffect } from 'react'

const App = () => {
  const [data, setData]=useState([]);

  useEffect(()=>{
    fetch('https://data.covid19india.org/data.json').then(
      response=>response.json()
    ).then(jsondata=>setData(jsondata.statewise))
  },[])

  return (
    <div>
      <center>
        <h1>INDIA COVID-19 CASES STATEWISE</h1>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>state</th>
              <th>confirmed</th>
              <th>recovered</th>
              <th>deaths</th>
              <th>active</th>
              <th>lastupdatedtime</th>
            </tr>
          </thead>
          <tbody>
           {data.map(item =>{
            return(
              <tr>
              <td>{item.state}</td>
              <td>{item.confirmed}</td>
              <td>{item.recovered}</td>
              <td>{item.deaths}</td>
              <td>{item.active}</td>
              <td>{item.lastupdatedtime}</td>
              </tr>
            )
           })}
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default App


