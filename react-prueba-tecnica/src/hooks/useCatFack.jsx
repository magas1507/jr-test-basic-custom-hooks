import { useEffect, useState } from "react"; 
import { getRandomFact } from '../services/fact';

export function useCatFact(){
  const [fact, setFact] = useState();

  const refreshRandomFact = () =>{    
    getRandomFact().then(newFact => setFact(newFact));
  }
  //to recovery the page 
  useEffect(refreshRandomFact,[])
  
  return { fact, refreshRandomFact }
}