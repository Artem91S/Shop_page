
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Theme } from "../Routes/Router";
import {useContext } from "react";
export default function MainLayout() {
  const[theme] =useContext(Theme)
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer
   color={theme}
   />
   </>
  )
}
