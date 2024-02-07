import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <section className="w-full 
                flex justify-center ">
            <section className=' bg-blue-200
                    text-[1.5rem] text-center w-full 
                     p-2 grid grid-cols-3 divide-x'>
                <Link className=" hover:text-blue-700 " to="/" >Info</Link>
                <Link className=" hover:text-blue-700 " to="/" >Home</Link>
                <Link className=" hover:text-blue-700 " to="/" >Contact</Link>
            </section>
        </section>
    );
}