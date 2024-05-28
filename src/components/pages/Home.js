import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [data,setData]= useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/static/games.json')
    .then((response)=>response.json()).then(setData)
  },[])
  return (
    <div>
  {data.map((games)=>{
const {id, name,image,url} = games;
return (
  <div id='ee' key={games.id}>
    <Link to={games.url}>
    <img src={games.image}/>
  <span id='text' >{games.name}</span>
  </Link>
  </div>
)
  })}
    </div>
  )
}
