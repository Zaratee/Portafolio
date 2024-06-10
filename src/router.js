import {createBrowserRouter, Navigate} from "react-router-dom";
import App from './App'
import MainLayout from "./layout/Main";
import ProyectsContainer from "./components/ProyectsContainer";
import Skills from "./pages/Skills";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: '*',
      element: <Navigate to={'/Main/proyects'} />,
    },
    {
      path: "/Skills",
      element: <Skills/>,
    },
    {
        path: "/Main",
        element: <MainLayout/>,
        children: [
          {
            path: "proyects",
            element: <ProyectsContainer />,
          },
          {
            path: '*',
            element: <Navigate to={'proyects'} />,
          },
        ],
    },
    
  ]);

