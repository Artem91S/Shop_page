import { Routes,Route } from 'react-router-dom'
import { createContext,useState } from 'react';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import About from '../Pages/About';
import Pricing from '../Pages/Pricing';
import DetailBlog from '../Pages/DetailBlog';
import Contact from '../Pages/Contact';
import MainLayout from '../Pages/MainLayout';


export const Theme = createContext('white')
const routes =[
  {
    id:1,
    index:'index',
    element:<Home/>
  },
  {
    id:2,
    path:'/blog',
    element:<Blog/>
  },
  {
    id:3,
    path:'/about',
    element:<About/>
  },
  {
    id:4,
    path:'/pricing',
    element:<Pricing/>
  },
  {
    id:5,
    path:'/detail blog',
    element:<DetailBlog/>
  },
  {
    id:6,
    path:'/contact',
    element:<Contact/>
  },
]
export default function Router() {
  const [theme, setTheme] = useState('');
  return (
    <Theme.Provider value ={[theme, setTheme]}>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
    {routes.map(route =>(
      <Route 
      key={route.id}
      index={route.index}
      path={route.path} 
      element={route.element}/>
    ))}
    </Route>
    </Routes>
    </Theme.Provider>
  )
}
