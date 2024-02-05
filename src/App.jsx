import './App.css';
import { Cars } from './Cars';

const cars = [ {name: "Acura", year: 2018, img: "./img/Acura.jpg"},
               {name: "Volvo", year: 2022, img: "./img/Volvo.webp"},
               {name: "Toyota", year: 2024, img: "./img/Toyota.png"},
               {name: "Suzuki", year: 2025, img: "./img/Suzuki.png"},
               {name: "Honda", year: 2017, img: "./img/Honda.webp"} ]

function App() {
  return (

    <>

    {/* a header with the logo */}
    <section className="w-full 
     flex justify-center ">
      <p className=' md:bg-red-800  bg-yellow-500
     text-[38px] text-center w-[90%] rounded-[35px] m-4 '>Rent a Car</p>
    </section>

    

    {/* each car that is available */}
    <Cars carsname={cars} />
    {/* each section has to be a button to rent the car */}

    
    
    </>

  )
}

export default App;
