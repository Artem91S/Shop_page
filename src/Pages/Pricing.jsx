import React from 'react'
import { Theme } from "../Routes/Router";
import { useEffect,useContext } from "react";

export default function Pricing() {
  const[theme, setTheme] =useContext(Theme)
  useEffect(()=>setTheme('black'),[])
  
  return (
    <div>Pricing</div>
  )
}
