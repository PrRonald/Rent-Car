import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Body } from './root/Body';
import { DetailCars } from './root/DatailCars';
import { ErrorPage } from './error-page';
import store from './app/store';
import {Provider} from 'react-redux'
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
        path: "paymentCarRent",
        element: <PaymentCarRent />,

      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
