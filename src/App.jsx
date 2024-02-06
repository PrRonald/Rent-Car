import './Styles/App.css';
import { Menu } from './routes/Menu';
import { Outlet, redirect } from "react-router-dom";


// console.log(redirect("/Home"))

if (1 === 1) redirect("/Home");
export function App() {
  return (

    <>
      {/* a header with the logo */}
      <Menu />

      {/* footer with information */}
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}


