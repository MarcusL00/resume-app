import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/Routes/HomePage.tsx';
import AboutMe from './Components/Routes/AboutMe.tsx';
import Contact from './Components/Routes/Contact.tsx';
import PageNotFound from './Components/Routes/PageNotFound.tsx';
import ProjectPage from './Components/Routes/ProjectPage.tsx';
import Project from './Components/Routes/Project.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />, 
    errorElement: <PageNotFound />
  },
  {
    path: '/About',
    element: <AboutMe /> 
  },
  {
    path: '/Contact',
    element: <Contact /> 
  },
  {
    path: '/Projects',
    element: <ProjectPage /> 
  },
  {
    path: '/Projects/:projectId',
    element: <Project /> 
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
