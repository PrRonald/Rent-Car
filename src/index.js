import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Body } from './root/Body';
import { DetailCars } from './root/DatailCars';
import { ErrorPage } from './error-page';
import { PaymentCarRent } from './root/PaymentCarRent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "detail/:carId",
        element: <DetailCars />,

      },
      {
        path: "/paymentCarRent/:carId",
        element: <PaymentCarRent />,
      }    
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
