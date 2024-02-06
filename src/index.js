import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './Styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ViewCars } from './routes/ViewCars';
import { Home } from './routes/Home';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "car/:carId",
        element: <ViewCars/>,
      },
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
