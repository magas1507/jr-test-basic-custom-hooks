import { useEffect, useState } from "react";
import { useCatFact } from "./hooks/useCatFack";
import { useCatImage } from "./hooks/useCatImage";

import './App.css'

export function App() {
  const { fact, refreshRandomFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact })
   
  const handleClick = async() =>{
    refreshRandomFact()
  }
  return(
  <main>
    <h1>App gatitos</h1>
    <button type="button" onClick={handleClick}>Get new fact </button>

    {fact && <p>{fact}</p>}
    {imageUrl && <img src={imageUrl} 
    alt={`image extracted usingthe firts three word for ${fact}`} />} 
    
  </main>
  )
}
