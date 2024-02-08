import './App.css';
import { Footer } from './root/Footer';
import { Header } from "./root/Header";
import {Outlet} from "react-router-dom"



function App() {
  return (
    <>
      <Header />
      <div className='datil' >
          <Outlet />
      </div>
      <Footer />
    </>

  )
}

export default App;
