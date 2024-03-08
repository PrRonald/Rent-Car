import './Styles/App.css';
import { Footer } from './component/Footer';
import { Header, HeaderPayment } from "./component/Header";
import { Outlet, useLocation } from "react-router-dom"

function App() {

  const location = useLocation();
  const reg = /paymentCarRent./i;
  
  return (
    <section className='w-full flex flex-col place-items-center '>
      <div className="w-[86.667%] lg:w-[97.9%] grid grid-flow-row gap-4 ">
        {reg.test(location.pathname) ? <HeaderPayment /> : <Header />}
        <div className='datil ' >
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
