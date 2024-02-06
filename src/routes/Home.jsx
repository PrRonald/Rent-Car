import { Cars } from './Cars';
import { Outlet } from "react-router-dom";

export const cars = [ {id: 1, name: "Acura", year: 2018, img: "./img/Acura.jpg"},
               {id: 2, name: "Volvo", year: 2022, img: "./img/Volvo.webp"},
               {id: 3, name: "Toyota", year: 2024, img: "./img/Toyota.png"},
               {id: 4, name: "Suzuki", year: 2025, img: "./img/Suzuki.png"},
               {id: 5, name: "Honda", year: 2017, img: "./img/Honda.webp"} ]


export const Home = () => {
    return(
        <>
            <Cars carsname={cars} />
        <div id='detail'>
        <Outlet />
        </div>
        </>
        
    );
} 



export function getImageById(name) {
    return cars.find((elem) => elem.name === name);
  }
  
  