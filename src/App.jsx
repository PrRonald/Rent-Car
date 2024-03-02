import './App.css';
import { Footer } from './component/Footer';
import { Header } from "./component/Header";
import { Outlet } from "react-router-dom"

function App() {
  return (
    <section className='w-full flex flex-col place-items-center gap-4'>
      <div className="w-[86.667%]  ">
        <Header />
        <div className='datil bg-[#F6F7F9] ' >
          <Outlet />
        </div>
        <Footer />
      </div>
    </section>
  )
}

export const getCarById = (id, arr) => {
  return (
    arr.find((elem) => elem.id === id)
  )
};

export default App;
