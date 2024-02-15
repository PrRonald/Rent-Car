import './App.css';
import { Footer } from './component/Footer';
import { Header } from "./component/Header";
import {Outlet} from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <div className='datil bg-[#F6F7F9] ' >
          <Outlet />
      </div>
      <Footer />
    </>
  )
}

export const getCarById = (id, arr) => {
  return(
    arr.find((elem) => elem.id === id)
  )
};

export default App;
