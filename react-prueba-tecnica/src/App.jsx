import { useEffect, useState } from "react"
import './App.css'
const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
 
  
  //with async-await
  // useEffect(()=>{
  //   async function getRandomFat() { 
  //     const res = await fetch(CAT_ENPOINT_RANDOM_FACT);
  //     const json = res.json();
  //     setFact(json); 
  //   }
  //   getRandomFat();
  // },[])

  //to recovery the page 
  useEffect(()=>{
    fetch(CAT_ENPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data =>{
        const { fact } = data;
        console.log(fact)
        setFact(fact);
      })              
  },[])

  // to recovery the iage every time we have  a new appointent
  useEffect(()=>{
     if(!fact) return;
    // 3 first word
    const threeFirstWord = fact.split(' ',3).join(' ');
    console.log(threeFirstWord)

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res => res.json)
      .then(response =>{
        const { url } = response
        setImageUrl(url)
      })
  },[fact])

  
  return(
  <main>
    <h1>App gatitos</h1>
    
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} 
    alt={`image extracted usingthe firts three word for ${fact}`} />} 

  </main>
  )
}
